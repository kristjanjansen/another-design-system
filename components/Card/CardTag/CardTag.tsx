'use client';
import React, { forwardRef, useRef } from 'react';
import { mergeProps, useButton, useFocusRing, useObjectRef } from 'react-aria';
import classNames from 'classnames';

import { ButtonProps } from '../../Button';
import { Text } from '../../Typography';

import styles from './CardTag.module.scss';

export interface CardTagProps {
    className?: string;
    children: React.ReactNode;
}

export const CardTag = forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref) => {
        const { children, className } = props;
        const forwardedRef = useObjectRef(ref);
        const fallbackRef = useRef(null);
        const buttonRef = forwardedRef || fallbackRef;
        const { buttonProps } = useButton(props, buttonRef);
        const { isFocusVisible, focusProps } = useFocusRing();

        const classList = classNames(styles.base, className, {
            [styles['focus-ring']]: isFocusVisible,
        });

        const mergedProps = mergeProps(buttonProps, focusProps);

        return (
            <button {...mergedProps} ref={buttonRef} className={classList}>
                <Text variant="line" size="small">
                    {children}
                </Text>
            </button>
        );
    }
);

CardTag.displayName = 'CardTag';
