import React from 'react';
import classNames from 'classnames';

import { MarginProps } from '../../types';
import { Heading } from '../../Typography';

import styles from './CardTitle.module.scss';

export interface CardTitleProps {
    className?: string;
    title: string;
}

export const CardTitle: React.FC<CardTitleProps & MarginProps> = ({
    className,
    title,
    ...rest
}) => {
    return (
        <Heading
            variant="h5"
            as="h3"
            className={classNames(styles.base, className)}
            {...rest}
        >
            {title}
        </Heading>
    );
};
