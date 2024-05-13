import React from 'react';
import classNames from 'classnames';

import styles from './CardFooter.module.scss';

export interface CardFooterProps {
    className?: string;
    children: React.ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({
    className,
    children,
}) => {
    return (
        <footer className={classNames(styles.base, className)}>
            {children}
        </footer>
    );
};
