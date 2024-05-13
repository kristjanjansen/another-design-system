'use client';
import React, { forwardRef, useRef } from 'react';
import {
    AriaBreadcrumbItemProps,
    mergeProps,
    useBreadcrumbItem,
    useFocusRing,
} from 'react-aria';
import { useObjectRef } from '@react-aria/utils';
import classNames from 'classnames';

import styles from './Breadcrumbs.module.scss';

export interface BreadcrumbItemProps extends AriaBreadcrumbItemProps {
    className?: string;
    href?: string;
    gaName?: string;
}

const BreadcrumbItem = forwardRef<HTMLAnchorElement, BreadcrumbItemProps>(
    (props, ref) => {
        const forwardedRef = useObjectRef(ref);
        const fallbackRef = useRef(null);
        const breadcrumbsRef = forwardedRef || fallbackRef;
        const { itemProps } = useBreadcrumbItem(props, breadcrumbsRef);
        const { children, href, isCurrent, isDisabled, className } = props;
        const { isFocusVisible, focusProps } = useFocusRing();

        const classList = classNames(styles['breadcrumb-item'], className, {
            [styles['breadcrumb-item--current']]: isCurrent,
            [styles['breadcrumb-item--disabled']]: isDisabled,
            [styles['breadcrumb-item--focused']]: isFocusVisible,
        });

        return (
            <li className={classList}>
                <a
                    {...mergeProps(itemProps, focusProps)}
                    className={styles['breadcrumb-item__link']}
                    ref={breadcrumbsRef}
                    href={href}
                >
                    {children}
                </a>
                {!isCurrent && (
                    <span
                        className={styles['breadcrumb-item__separator']}
                        aria-hidden="true"
                    >
                        /
                    </span>
                )}
            </li>
        );
    }
);

BreadcrumbItem.displayName = 'BreadcrumbItem';

export default BreadcrumbItem;
