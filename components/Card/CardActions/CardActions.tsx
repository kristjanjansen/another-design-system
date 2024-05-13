import React from 'react';

import styles from './CardActions.module.scss';

export interface CardActionsProps {
    children: React.ReactNode;
}

export const CardActions: React.FC<CardActionsProps> = ({ children }) => {
    return <div className={styles.base}>{children}</div>;
};
