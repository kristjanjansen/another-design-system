import React from 'react';
import classNames from 'classnames';

import styles from './Container.module.scss';

export interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const Container: React.FC<ContainerProps> = ({
    children,
    className,
}) => <div className={classNames(styles.base, className)}>{children}</div>;
