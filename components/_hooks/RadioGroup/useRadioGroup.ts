// This is a copy of react-aria useRadioGroup hook, so we can manipulate keyboard navigation as we need

import { useLocale } from '@react-aria/i18n';
import { useFocusWithin } from '@react-aria/interactions';
import { useField } from '@react-aria/label';
import { filterDOMProps, mergeProps, useId } from '@react-aria/utils';
import { RadioGroupState } from '@react-stately/radio';
import { AriaRadioGroupProps } from '@react-types/radio';
import { DOMAttributes, ValidationResult } from '@react-types/shared';

import { getFocusableTreeWalker, radioGroupData } from './utils';

export interface RadioGroupAria extends ValidationResult {
    radioGroupProps: DOMAttributes;
    labelProps: DOMAttributes;
    descriptionProps: DOMAttributes;
    errorMessageProps: DOMAttributes;
}

export function useRadioGroup(
    props: AriaRadioGroupProps,
    state: RadioGroupState
): RadioGroupAria {
    const {
        name,
        isReadOnly,
        isRequired,
        isDisabled,
        orientation = 'vertical',
        validationBehavior = 'aria',
    } = props;
    const { direction } = useLocale();

    const { isInvalid, validationErrors, validationDetails } =
        state.displayValidation;
    const { labelProps, fieldProps, descriptionProps, errorMessageProps } =
        useField({
            ...props,
            // Radio group is not an HTML input element so it
            // shouldn't be labeled by a <label> element.
            labelElementType: 'span',
            isInvalid: state.isInvalid,
            errorMessage: props.errorMessage || validationErrors,
        });

    const domProps = filterDOMProps(props, { labelable: true });

    // When the radio group loses focus, reset the focusable radio to null if
    // there is no selection. This allows tabbing into the group from either
    // direction to go to the first or last radio.
    const { focusWithinProps } = useFocusWithin({
        onBlurWithin(e) {
            props.onBlur?.(e);
            if (!state.selectedValue) {
                state.setLastFocusedValue(null);
            }
        },
        onFocusWithin: props.onFocus,
        onFocusWithinChange: props.onFocusChange,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onKeyDown = (e: any) => {
        let nextDir;
        switch (e.key) {
            case 'ArrowRight':
                if (direction === 'rtl' && orientation !== 'vertical') {
                    nextDir = 'prev';
                } else {
                    nextDir = 'next';
                }
                break;
            case 'ArrowLeft':
                if (direction === 'rtl' && orientation !== 'vertical') {
                    nextDir = 'next';
                } else {
                    nextDir = 'prev';
                }
                break;
            case 'ArrowDown':
                nextDir = 'next';
                break;
            case 'ArrowUp':
                nextDir = 'prev';
                break;
            default:
                return;
        }
        e.preventDefault();
        const walker = getFocusableTreeWalker(e.currentTarget, {
            from: e.target,
        });
        let nextElem;
        if (nextDir === 'next') {
            nextElem = walker.nextNode();
            if (!nextElem) {
                walker.currentNode = e.currentTarget;
                nextElem = walker.firstChild();
            }
        } else {
            nextElem = walker.previousNode();
            if (!nextElem) {
                walker.currentNode = e.currentTarget;
                nextElem = walker.lastChild();
            }
        }
        if (nextElem) {
            // Call focus on nextElem so that keyboard navigation scrolls the radio into view
            (nextElem as HTMLInputElement).focus();
            state.setSelectedValue((nextElem as HTMLInputElement).value);
        }
    };

    const groupName = useId(name);
    radioGroupData.set(state, {
        name: groupName,
        descriptionId: descriptionProps.id,
        errorMessageId: errorMessageProps.id,
        validationBehavior,
    });

    return {
        radioGroupProps: mergeProps(domProps, {
            // https://www.w3.org/TR/wai-aria-1.2/#radiogroup
            role: 'radiogroup',
            onKeyDown,
            'aria-invalid': state.isInvalid || undefined,
            'aria-errormessage': props['aria-errormessage'],
            'aria-readonly': isReadOnly || undefined,
            'aria-required': isRequired || undefined,
            'aria-disabled': isDisabled || undefined,
            'aria-orientation': orientation,
            ...fieldProps,
            ...focusWithinProps,
        }),
        labelProps,
        descriptionProps,
        errorMessageProps,
        isInvalid,
        validationErrors,
        validationDetails,
    };
}
