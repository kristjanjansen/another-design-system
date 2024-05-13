import React from 'react';
import classNames from 'classnames';

import styles from './CardContent.module.scss';

export interface CardContentProps {
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
    gap?: 'small' | 'medium';
    className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({
    children,
    align,
    gap = 'medium',
    className,
}) => {
    return (
        <div
            className={classNames(styles.base, className, {
                [styles.center]: align === 'center',
                [styles.gapSmall]: gap === 'small',
            })}
        >
            {children}
        </div>
    );
};
