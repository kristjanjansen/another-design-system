'use client';
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
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
    const forwardedRef = useObjectRef(ref);
    const fallbackRef = useRef(null);
    const linkRef = forwardedRef || fallbackRef;
    const { className, children, href, target } = props;
    const { linkProps } = useLink(props, linkRef);
    const { focusProps, isFocusVisible } = useFocusRing();

    const classList = classNames(styles.link, className, {
        [styles[`focus-ring`]]: isFocusVisible,
    });

    return (
        <a
            {...mergeProps(linkProps, focusProps)}
            className={classList}
            ref={linkRef}
            href={href}
            target={target}
        >
            {children}
        </a>
    );
});

Link.displayName = 'Link';

export default Link;
