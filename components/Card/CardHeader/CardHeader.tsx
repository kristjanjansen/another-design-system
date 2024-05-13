import React from 'react';

import { Text } from '../../Typography';
import { CardTitle } from '../CardTitle/CardTitle';

import styles from './CardHeader.module.scss';

export interface CardHeaderProps {
    title: string;
    className?: string;
    date?: string;
    children?: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
    title,
    className,
    date,
    children,
}) => {
    return (
        <header className={`${styles.base} ${className || ''}`}>
            {children}
            <CardTitle title={title} />
            {date && (
                <Text variant="line" size="small">
                    <time className={styles.date} dateTime={date}>
                        {date}
                    </time>
                </Text>
            )}
        </header>
    );
};
