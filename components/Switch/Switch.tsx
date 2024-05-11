'use client';
import React, { forwardRef, useRef } from 'react';
import {
    AriaSwitchProps,
    useFocusRing,
    useId,
    useSwitch,
    VisuallyHidden,
} from 'react-aria';
import { useToggleState } from 'react-stately';
import { mergeProps, useObjectRef } from '@react-aria/utils';
import classNames from 'classnames';

import { Stack } from '../Stack';
import { DescriptionSeverity } from '../types';
import { Label, Text } from '../Typography';

import styles from './Switch.module.scss';

export interface SwitchProps extends AriaSwitchProps {
    description?: string;
    descriptionSeverity?: DescriptionSeverity;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
    const forwardedRef = useObjectRef(ref);
    const fallbackRef = useRef(null);
    const switchRef = forwardedRef || fallbackRef;

    const state = useToggleState(props);
    const { inputProps, labelProps, isPressed, isSelected } = useSwitch(
        props,
        state,
        switchRef
    );
    const { isFocusVisible, focusProps } = useFocusRing();

    const descriptionId = useId();

    const { description, children, descriptionSeverity = 'regular' } = props;

    const classList = classNames(styles.switch, {
        [styles[`switch--pressed`]]: isPressed,
        [styles[`switch--selected`]]: isSelected,
        [styles[`switch--focused`]]: isFocusVisible,
    });

    const descriptionClassList = classNames({
        [styles['messages__description--regular']]:
            descriptionSeverity === 'regular',
        [styles['messages__description--warning']]:
            descriptionSeverity === 'warning',
    });

    // Remove aria-describedby from react-aria props and concat with internal id's to keep it usable
    const { 'aria-describedby': ariaDescribedBy, ...restInputProps } =
        inputProps;

    return (
        <Stack>
            <Label weight="400" className={classList} {...labelProps}>
                <VisuallyHidden>
                    <input
                        {...mergeProps(restInputProps, focusProps)}
                        ref={switchRef}
                        aria-describedby={`${descriptionId} ${ariaDescribedBy}`}
                    />
                </VisuallyHidden>
                <span className={styles.switch__indicator}></span>

                <div className={styles.switch__label}>{children}</div>
            </Label>

            {description && (
                <div className={styles.messages}>
                    <Text
                        variant="line"
                        size="small"
                        id={descriptionId}
                        className={descriptionClassList}
                    >
                        {description}
                    </Text>
                </div>
            )}
        </Stack>
    );
});

Switch.displayName = 'Switch';

export default Switch;
