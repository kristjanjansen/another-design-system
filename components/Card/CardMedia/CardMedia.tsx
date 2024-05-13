import React from 'react';

import styles from './CardMedia.module.scss';

export interface CardMediaProps {
    imageUrl: string;
    title?: string;
}

export const CardMedia: React.FC<CardMediaProps> = ({ imageUrl, title }) => {
    return (
        <div
            className={styles.base}
            style={{ backgroundImage: `url(${imageUrl})` }}
            aria-label={title}
        />
    );
};
