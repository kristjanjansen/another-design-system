// This is a copy of react-aria useRadio hook, so we can manipulate keyboard navigation as we need

import { InputHTMLAttributes, LabelHTMLAttributes, RefObject } from 'react';
import { useFocusable } from '@react-aria/focus';
import { useFormValidation } from '@react-aria/form';
import { usePress } from '@react-aria/interactions';
import { filterDOMProps, mergeProps, useFormReset } from '@react-aria/utils';
import { RadioGroupState } from '@react-stately/radio';
import { AriaRadioProps } from '@react-types/radio';

import { radioGroupData } from './utils';

export interface RadioAria {
    labelProps: LabelHTMLAttributes<HTMLLabelElement>;
    inputProps: InputHTMLAttributes<HTMLInputElement>;
    isDisabled: boolean;
    isSelected: boolean;
    isPressed: boolean;
}

export function useRadio(
    props: AriaRadioProps,
    state: RadioGroupState,
    ref: RefObject<HTMLInputElement>
): RadioAria {
    const {
        value,
        children,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
    } = props;

    const isDisabled = props.isDisabled || state.isDisabled;

    const hasChildren = children != null;
    const hasAriaLabel = ariaLabel != null || ariaLabelledby != null;
    if (!hasChildren && !hasAriaLabel) {
        console.warn(
            'If you do not provide children, you must specify an aria-label for accessibility'
        );
    }

    const checked = state.selectedValue === value;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onChange = (e: any) => {
        e.stopPropagation();
        state.setSelectedValue(value);
    };

    const { pressProps, isPressed } = usePress({
        isDisabled,
    });

    // iOS does not toggle radios if you drag off and back onto the label, so handle it ourselves.
    const { pressProps: labelProps, isPressed: isLabelPressed } = usePress({
        isDisabled,
        onPress() {
            state.setSelectedValue(value);
        },
    });

    const { focusableProps } = useFocusable(
        mergeProps(props, {
            onFocus: () => state.setLastFocusedValue(value),
        }),
        ref
    );
    const interactions = mergeProps(pressProps, focusableProps);
    const domProps = filterDOMProps(props, { labelable: true });
    let tabIndex: number | undefined = -1;
    if (state.selectedValue != null) {
        if (state.selectedValue === value) {
            tabIndex = 0;
        }
    } else if (
        state.lastFocusedValue === value ||
        state.lastFocusedValue == null
    ) {
        tabIndex = 0;
    }
    if (isDisabled) {
        tabIndex = undefined;
    }

    const { name, descriptionId, errorMessageId, validationBehavior } =
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        radioGroupData.get(state)!;
    useFormReset(ref, state.selectedValue, state.setSelectedValue);
    useFormValidation({ validationBehavior }, state, ref);

    return {
        labelProps: mergeProps(labelProps, {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onClick: (e: any) => e.preventDefault(),
        }),
        inputProps: mergeProps(domProps, {
            ...interactions,
            type: 'radio',
            name,
            tabIndex,
            disabled: isDisabled,
            required: state.isRequired && validationBehavior === 'native',
            checked,
            value,
            onChange,
            'aria-describedby':
                [
                    props['aria-describedby'],
                    state.isInvalid ? errorMessageId : null,
                    descriptionId,
                ]
                    .filter(Boolean)
                    .join(' ') || undefined,
        }),
        isDisabled,
        isSelected: checked,
        isPressed: isPressed || isLabelPressed,
    };
}
