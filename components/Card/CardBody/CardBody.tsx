import React from 'react';
import classNames from 'classnames';

import styles from './CardBody.module.scss';

export interface CardBodyProps {
    children: React.ReactNode;
    grow?: boolean;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, grow }) => {
    return (
        <div
            className={classNames(styles.base, {
                [styles.grow]: grow,
            })}
        >
            {children}
        </div>
    );
};
