import React from 'react';

import styles from './Card.module.scss';

export interface CardProps {
    className?: string;
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
    return (
        <div className={`${styles.base} ${className || ''}`}>{children}</div>
    );
};
