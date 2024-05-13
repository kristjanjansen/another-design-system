import React from 'react';
import classNames from 'classnames';

import styles from './CardIconWrapper.module.scss';

export interface CardIconWrapperProps {
    className?: string;
    children: React.ReactNode;
}

export const CardIconWrapper: React.FC<CardIconWrapperProps> = ({
    className,
    children,
}) => {
    return <div className={classNames(styles.base, className)}>{children}</div>;
};
