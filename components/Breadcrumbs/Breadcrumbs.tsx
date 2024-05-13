'use client';
import React, { Children, cloneElement, ReactElement } from 'react';
import { AriaBreadcrumbsProps, useBreadcrumbs } from 'react-aria';
import classNames from 'classnames';

import styles from './Breadcrumbs.module.scss';

export interface BreadcrumbsProps extends AriaBreadcrumbsProps {
    className?: string;
    children: ReactElement | ReactElement[];
}

const Breadcrumbs = (props: BreadcrumbsProps) => {
    const { navProps } = useBreadcrumbs(props);
    const { children, className } = props;
    const childCount = Children.count(children);

    return (
        <nav
            {...navProps}
            className={classNames(styles.breadcrumbs, className)}
        >
            <ol className={styles.breadcrumbs__list}>
                {Children.map(children, (child, i) =>
                    cloneElement(child, {
                        isCurrent: i === childCount - 1,
                    })
                )}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
