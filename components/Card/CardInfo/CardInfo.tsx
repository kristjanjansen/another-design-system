import React from 'react';

import { Text } from '../../Typography';

import styles from './CardInfo.module.scss';

export interface CardInfoProps {
    text: 'string';
}

export const CardInfo: React.FC<CardInfoProps> = ({ text }) => {
    return (
        <div className={styles.base}>
            <Text size="small">{text}</Text>
        </div>
    );
};
