'use client';
import React, { forwardRef, ReactNode, useRef, useState } from 'react';
import {
    AriaTextFieldProps,
    useButton,
    useFocusRing,
    useId,
    useTextField,
} from 'react-aria';
import { mergeProps, useObjectRef } from '@react-aria/utils';
import classNames from 'classnames';

import { SvgSmileyHappy, SvgSmileySad } from '../Icons';
import { Stack } from '../Stack';
import type { DescriptionSeverity } from '../types';
import { Label, Text } from '../Typography';

import styles from './Textfield.module.scss';

export interface TextfieldProps
    extends Omit<AriaTextFieldProps, 'errorMessage'> {
    inputStart?: ReactNode;
    inputEnd?: ReactNode;
    errorMessage?: string;
    descriptionSeverity?: DescriptionSeverity;
    labelSuffix?: string;
    tooltipTrigger?: ReactNode;
    showPasswordToggle?: boolean;
    passwordToggleAriaLabel?: string;
    title?: string;
    link?: ReactNode;
}

export const Textfield = forwardRef<HTMLInputElement, TextfieldProps>(
    (props, ref) => {
        const forwardedRef = useObjectRef(ref);
        const fallbackRef = useRef(null);
        const textfieldRef = forwardedRef || fallbackRef;

        const inputSuffixId = useId();

        const {
            labelProps,
            inputProps,
            descriptionProps,
            errorMessageProps,
            validationErrors,
            isInvalid,
        } = useTextField(props, textfieldRef);
        // Focus ring for input
        const { isFocusVisible, focusProps } = useFocusRing({
            isTextInput: true,
        });
        // Focus ring for password visibility toggle button
        const {
            isFocusVisible: passwordToggleFocus,
            focusProps: passwordToggleFocusProps,
        } = useFocusRing();

        const [showPassword, setShowPassword] = useState(false);
        const buttonRef = useRef<HTMLButtonElement | null>(null);
        const { buttonProps } = useButton(
            { onPress: () => setShowPassword(!showPassword) },
            buttonRef
        );

        const {
            label,
            description,
            errorMessage: customErrorMessage,
            inputStart,
            inputEnd,
            validationBehavior,
            descriptionSeverity = 'regular',
            labelSuffix,
            tooltipTrigger,
            showPasswordToggle,
            passwordToggleAriaLabel,
            title,
            link,
        } = props;

        const textfieldClassList = classNames(styles.textfield, {
            [styles['textfield--focused']]: isFocusVisible,
            [styles['textfield--focused-password-toggle']]: passwordToggleFocus,
            [styles['textfield--invalid']]: isInvalid,
            [styles['textfield--has-prefix']]: inputStart,
            [styles['textfield--has-suffix']]: inputEnd,
            [styles['textfield--text-prefix']]: typeof inputStart === 'string',
            [styles['textfield--text-suffix']]: typeof inputEnd === 'string',
        });

        const descriptionClassList = classNames({
            [styles['messages__description--regular']]:
                descriptionSeverity === 'regular',
            [styles['messages__description--warning']]:
                descriptionSeverity === 'warning',
        });

        const showPasswordButtonClassList = classNames(
            styles['password-toggle'],
            {
                [styles['password-toggle--focus']]: passwordToggleFocus,
            }
        );

        // Allow only native error messages with native validation behaviour
        const errorMessage =
            validationBehavior === 'native'
                ? validationErrors.join(' ')
                : customErrorMessage;

        const hasMessages = errorMessage || description;

        // Remove aria-describedby from react-aria props and concat with internal id's to keep it usable. Extract type for password toggle logic.
        const {
            'aria-describedby': ariaDescribedBy,
            type,
            ...restInputProps
        } = inputProps;

        // When input type is password, allow toggling the type for password visibility
        const inputType =
            type === 'password' ? (showPassword ? 'text' : 'password') : type;

        return (
            <Stack>
                {label && (
                    <div className={styles.label__container}>
                        <Stack
                            direction={{
                                xsmall: 'row',
                            }}
                        >
                            <Label
                                weight="600"
                                className={styles.label}
                                {...labelProps}
                            >
                                {label}
                                {labelSuffix && (
                                    <>
                                        {/* Use an extra element as separator so everything stays inline and no extra margin on either side needed, which doesn't look right when text starts wrapping */}
                                        <span
                                            className={
                                                styles[
                                                    'label__suffix-separator'
                                                ]
                                            }
                                        ></span>
                                        <Text
                                            variant="line"
                                            italic
                                            size="small"
                                            className={styles.label__suffix}
                                        >
                                            {labelSuffix}
                                        </Text>
                                    </>
                                )}

                                {link && (
                                    <>
                                        <span
                                            className={
                                                styles[
                                                    'label__suffix-separator'
                                                ]
                                            }
                                        ></span>
                                        {link}
                                    </>
                                )}
                            </Label>
                        </Stack>

                        {tooltipTrigger}
                    </div>
                )}

                <div className={textfieldClassList}>
                    {inputStart && (
                        <span className={styles.textfield__prefix}>
                            {inputStart}
                        </span>
                    )}
                    <input
                        {...mergeProps(restInputProps, focusProps)}
                        className={styles.textfield__input}
                        ref={textfieldRef}
                        // Add suffix to aria-describedby list
                        aria-describedby={`${inputSuffixId} ${ariaDescribedBy}`}
                        type={inputType}
                        title={title}
                    />
                    {type === 'password' && showPasswordToggle && (
                        <div className={showPasswordButtonClassList}>
                            <button
                                {...mergeProps(
                                    buttonProps,
                                    passwordToggleFocusProps
                                )}
                                className={styles['password-toggle__button']}
                                ref={buttonRef}
                                aria-label={passwordToggleAriaLabel}
                                aria-pressed={showPassword}
                                aria-describedby={`${labelProps.id} ${descriptionProps.id}`}
                            >
                                {showPassword ? (
                                    // TODO: needs correct icons
                                    <SvgSmileyHappy
                                        aria-hidden={true}
                                        className={
                                            styles['password-toggle__icon']
                                        }
                                    />
                                ) : (
                                    <SvgSmileySad
                                        aria-hidden={true}
                                        className={
                                            styles['password-toggle__icon']
                                        }
                                    />
                                )}
                            </button>
                        </div>
                    )}
                    {inputEnd && (
                        <span
                            id={inputSuffixId}
                            className={styles.textfield__suffix}
                        >
                            {inputEnd}
                        </span>
                    )}
                </div>

                {hasMessages && (
                    <Stack>
                        {/* Show custom error message only when isInvalid */}
                        {isInvalid && errorMessage && (
                            <div
                                {...errorMessageProps}
                                className={styles.messages__error}
                            >
                                <Text variant="line" size="small">
                                    {errorMessage}
                                </Text>
                            </div>
                        )}
                        {description && (
                            <div
                                {...descriptionProps}
                                className={descriptionClassList}
                            >
                                <Text variant="line" size="small">
                                    {description}
                                </Text>
                            </div>
                        )}
                    </Stack>
                )}
            </Stack>
        );
    }
);

Textfield.displayName = 'Textfield';

export default Textfield;
