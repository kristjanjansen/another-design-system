"use client";

import React, { forwardRef, ReactNode, useRef } from 'react';
import { AriaLinkOptions, mergeProps, useFocusRing, useLink } from 'react-aria';
import { useObjectRef } from '@react-aria/utils';
import classNames from 'classnames';

import styles from './Link.module.scss';

export interface LinkProps extends AriaLinkOptions {
    className?: string;
    children?: ReactNode;
    href?: string;
    target?: string;
    size?: 'sm' | 'md' | 'lg';
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
    const forwardedRef = useObjectRef(ref);
    const fallbackRef = useRef(null);
    const linkRef = forwardedRef || fallbackRef;
    const { className, children, href, target, size = 'md' } = props;
    const { linkProps } = useLink(props, linkRef);
    const { focusProps, isFocusVisible } = useFocusRing();

    const classList = classNames(
        styles.link,
        styles[`link--${size}`],
        className,
        {
            [styles[`focus-ring`]]: isFocusVisible,
        }
    );

    return (
        <a
            {...mergeProps(linkProps, focusProps)}
            className={classList}
            ref={linkRef}
            href={href}
            target={target}
        >
            <span className={styles.link__text}>{children}</span>
        </a>
    );
});

Link.displayName = 'Link';

export default Link;
