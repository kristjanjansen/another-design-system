'use client';
import React, { forwardRef, ReactNode, useContext, useRef } from 'react';
import {
    AriaCheckboxProps,
    useCheckbox,
    useCheckboxGroupItem,
    useFocusRing,
    useId,
    VisuallyHidden,
} from 'react-aria';
import { useToggleState } from 'react-stately';
import { mergeProps, useObjectRef } from '@react-aria/utils';
import classNames from 'classnames';

import { CheckboxGroupContext } from '../CheckboxGroup';
import SvgTick from '../Icons/Tick';
import { Stack } from '../Stack';
import { Label, Text } from '../Typography';

import styles from './Checkbox.module.scss';

export interface CheckboxProps extends AriaCheckboxProps {
    value?: string;
    description?: string;
    errorMessage?: string;
    children: ReactNode;
    descriptionSeverity?: 'regular' | 'warning';
    suffix?: string;
    link?: ReactNode;
    infoHint?: ReactNode;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
    const {
        value,
        errorMessage: customErrorMessage,
        description,
        children,
        descriptionSeverity = 'regular',
        suffix,
        validationBehavior,
        link,
        infoHint,
    } = props;

    const checkboxGroupState = useContext(CheckboxGroupContext);
    const forwardedRef = useObjectRef(ref);
    const checkboxRef = forwardedRef || useRef(null);
    const standaloneState = useToggleState(props);

    let inputProps, isSelected, isInvalid, validationErrors;

    if (checkboxGroupState && value) {
        ({ inputProps, isSelected, isInvalid, validationErrors } =
            useCheckboxGroupItem(
                { ...props, value },
                checkboxGroupState,
                checkboxRef
            ));
    } else {
        ({ inputProps, isSelected, isInvalid, validationErrors } = useCheckbox(
            props,
            standaloneState,
            checkboxRef
        ));
    }

    const { isFocusVisible, focusProps } = useFocusRing();

    const errorId = useId();
    const descriptionId = useId();

    const checkBoxclassList = classNames(styles.checkbox, {
        [styles['checkbox--selected']]: isSelected,
        [styles['checkbox--focused']]: isFocusVisible,
        [styles['checkbox--invalid']]: isInvalid,
    });

    const descriptionClassList = classNames({
        [styles['messages__description--regular']]:
            descriptionSeverity === 'regular',
        [styles['messages__description--warning']]:
            descriptionSeverity === 'warning',
    });

    // Allow only native error messages with native validation behaviour
    const errorMessage =
        validationBehavior === 'native'
            ? validationErrors.join(' ')
            : customErrorMessage;

    const hasMessages = errorMessage || description;

    // Remove aria-describedby from react-aria props and concat with internal id's to keep it usable
    const { 'aria-describedby': ariaDescribedBy, ...restInputProps } =
        inputProps;

    return (
        <Stack>
            <Label className={checkBoxclassList}>
                <VisuallyHidden>
                    <input
                        {...mergeProps(restInputProps, focusProps)}
                        ref={checkboxRef}
                        aria-describedby={`${errorId} ${descriptionId} ${ariaDescribedBy}`}
                    />
                </VisuallyHidden>
                <span className={styles.checkbox__indicator} aria-hidden="true">
                    <SvgTick className={styles.checkbox__icon} />
                </span>
                <div className="flex gap-2">
                    <div className={styles.checkbox__label}>
                        {children}
                        {suffix && (
                            <>
                                <span
                                    className={
                                        styles['checkbox__suffix-separator']
                                    }
                                ></span>
                                <Text
                                    variant="line"
                                    italic
                                    size="small"
                                    className={styles.checkbox__suffix}
                                >
                                    {suffix}
                                </Text>
                            </>
                        )}
                        {link && (
                            <>
                                <span
                                    className={
                                        styles['checkbox__suffix-separator']
                                    }
                                ></span>
                                {link}
                            </>
                        )}
                    </div>
                    {infoHint}
                </div>
            </Label>
            {hasMessages && (
                <div className={styles.messages}>
                    {isInvalid && errorMessage && (
                        <Text
                            variant="line"
                            size="small"
                            id={errorId}
                            className={styles.messages__error}
                        >
                            {errorMessage}
                        </Text>
                    )}
                    {description && (
                        <Text
                            variant="line"
                            size="small"
                            id={descriptionId}
                            className={descriptionClassList}
                        >
                            {description}
                        </Text>
                    )}
                </div>
            )}
        </Stack>
    );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
