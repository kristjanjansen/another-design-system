'use client';
import React, { useEffect, useRef } from 'react';
import {
    mergeProps,
    useButton,
    useComboBox,
    useFilter,
    useFocusRing,
    useSearchField,
} from 'react-aria';
import { useComboBoxState, useSearchFieldState } from 'react-stately';
import type { AriaComboBoxProps } from '@react-types/combobox';
import classNames from 'classnames';

import { SvgClose } from '../Icons';
import { Popover } from '../Popover';
import SelectListBox from '../SelectListBox/SelectListBox';
import { Stack } from '../Stack';
import { DescriptionSeverity } from '../types';
import { Label, Text } from '../Typography';

import styles from './Autocomplete.module.scss';

export interface AutocompleteProps<T> extends AriaComboBoxProps<T> {
    errorMessage?: string;
    descriptionSeverity?: DescriptionSeverity;
    labelSuffix?: string;
    tooltipTrigger?: React.ReactNode;
    clearButtonAriaLabel?: string;
    isOpen?: boolean;
    isNonModal?: boolean;
}

const Autocomplete = <T extends object>(props: AutocompleteProps<T>) => {
    const { contains } = useFilter({ sensitivity: 'base' });
    const state = useComboBoxState({ ...props, defaultFilter: contains });

    const inputRef = useRef(null);
    const listBoxRef = useRef(null);
    const popoverRef = useRef(null);
    const outerRef = useRef(null);
    const clearButtonRef = useRef(null);
    const portalRef = useRef(null);

    const { isOpen = false, isNonModal = false } = props;

    const {
        descriptionProps,
        inputProps,
        listBoxProps,
        labelProps,
        validationErrors,
        errorMessageProps,
        isInvalid,
    } = useComboBox(
        {
            ...props,
            inputRef,
            listBoxRef,
            popoverRef,
        },
        state
    );

    useEffect(() => {
        state.setOpen(isOpen);
    }, [props.isOpen]);

    // Get props for the clear button from useSearchField
    const searchProps = {
        label: props.label,
        value: state.inputValue,
        onChange: (v: string) => state.setInputValue(v),
    };

    const searchState = useSearchFieldState(searchProps);
    const { clearButtonProps } = useSearchField(
        searchProps,
        searchState,
        inputRef
    );
    const { buttonProps } = useButton(clearButtonProps, clearButtonRef);
    const { isFocusVisible, focusProps } = useFocusRing({
        isTextInput: true,
    });
    const {
        isFocusVisible: isClearButtonFocusVisible,
        focusProps: clearButtonFocusProps,
    } = useFocusRing({
        isTextInput: true,
    });

    const {
        label,
        description,
        validationBehavior,
        errorMessage: customErrorMessage,
        descriptionSeverity = 'regular',
        labelSuffix,
        tooltipTrigger,
        clearButtonAriaLabel,
    } = props;

    const textfieldClassList = classNames(styles.textfield, {
        [styles['textfield--focused']]: isFocusVisible,
        [styles['textfield--focus-within']]: isClearButtonFocusVisible,
        [styles['textfield--invalid']]: isInvalid,
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

    return (
        <div ref={portalRef} className={styles.base}>
            <Stack>
                {label && (
                    <div className={styles.label__container}>
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
                                            styles['label__suffix-separator']
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
                        </Label>
                        {tooltipTrigger}
                    </div>
                )}

                <div ref={outerRef} className={textfieldClassList}>
                    <input
                        {...mergeProps(inputProps, focusProps)}
                        ref={inputRef}
                        className={styles.textfield__input}
                    />

                    {state.inputValue && (
                        <button
                            {...mergeProps(buttonProps, clearButtonFocusProps)}
                            ref={clearButtonRef}
                            className={classNames(styles.clear, {
                                [styles['clear--focused']]:
                                    isClearButtonFocusVisible,
                            })}
                            onKeyDown={undefined}
                            tabIndex={0}
                            aria-label={clearButtonAriaLabel}
                            aria-describedby={`${labelProps.id} ${descriptionProps.id}`}
                        >
                            <SvgClose
                                aria-hidden="true"
                                className={styles.clear__icon}
                            />
                        </button>
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

            {state.isOpen && (
                <Popover
                    popoverRef={popoverRef}
                    triggerRef={outerRef}
                    portalContainer={portalRef.current}
                    state={state}
                    placement="bottom start"
                    offset={6}
                    className={styles.popover}
                    isNonModal={isNonModal}
                >
                    <SelectListBox
                        {...listBoxProps}
                        listBoxRef={listBoxRef}
                        state={state}
                    />
                </Popover>
            )}
        </div>
    );
};

export default Autocomplete;
