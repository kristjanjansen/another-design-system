'use client';
import React, { createContext, ReactNode } from 'react';
import { AriaCheckboxGroupProps, useCheckboxGroup } from 'react-aria';
import { CheckboxGroupState, useCheckboxGroupState } from 'react-stately';

import { Stack } from '../Stack';
import { Label, Text } from '../Typography';

import styles from './CheckboxGroup.module.scss';

export interface CheckboxGroupProps
    extends Omit<AriaCheckboxGroupProps, 'errorMessage'> {
    children: ReactNode;
    errorMessage?: string;
    labelSuffix?: string;
    tooltipTrigger?: React.ReactNode;
}

export const CheckboxGroupContext = createContext<CheckboxGroupState | null>(
    null
);

const CheckboxGroup = (props: CheckboxGroupProps) => {
    const state = useCheckboxGroupState(props);
    const {
        groupProps,
        labelProps,
        errorMessageProps,
        isInvalid,
        validationErrors,
    } = useCheckboxGroup(props, state);

    const {
        children,
        errorMessage: customErrorMessage,
        validationBehavior,
        label,
        labelSuffix,
        tooltipTrigger,
    } = props;

    // Allow only native error messages with native validation behaviour
    const errorMessage =
        validationBehavior === 'native'
            ? validationErrors.join(' ')
            : customErrorMessage;

    return (
        <div {...groupProps}>
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

                <CheckboxGroupContext.Provider value={state}>
                    {children}
                </CheckboxGroupContext.Provider>

                {isInvalid && errorMessage && (
                    <div
                        {...errorMessageProps}
                        className={styles['message--error']}
                    >
                        <Text variant="line" size="small">
                            {errorMessage}
                        </Text>
                    </div>
                )}
            </Stack>
        </div>
    );
};

export default CheckboxGroup;
