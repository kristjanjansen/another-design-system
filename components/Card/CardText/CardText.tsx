import React from 'react';
import classNames from 'classnames';

import { MarginProps } from '../../types';
import { Text } from '../../Typography';

import styles from './CardText.module.scss';

export interface CardTextProps {
    className?: string;
    variant?: 'supportive' | 'descriptive';
    text: string;
}

export const CardText: React.FC<CardTextProps & MarginProps> = ({
    className,
    text,
    variant = 'descriptive',
    ...rest
}) => {
    return (
        <Text
            className={classNames(styles.base, className, {
                [styles.supportive]: variant === 'supportive',
            })}
            {...rest}
        >
            {text}
        </Text>
    );
};
