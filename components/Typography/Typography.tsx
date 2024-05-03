import React from 'react';

import { getMarginStyles } from '../_helpers/marginToCss';
import { MarginProps } from '../types';

import { getDefaultTag } from './helpers';
import { HeadingProps, LabelProps, TextProps } from './types';

import styles from './Typography.module.scss';

// Heading component
export const Heading: React.FC<MarginProps & HeadingProps> = ({
    id,
    variant,
    as,
    italic = false,
    underline = false,
    weight = '600',
    uppercase = false,
    children,
    className,
    dangerouslySetInnerHTML,
    mt,
    mb,
    my,
    ...props
}) => {
    const Component = as || getDefaultTag(variant);
    const baseClassName = styles[`heading-${variant}`];
    const classNames = `
        ${baseClassName}
        ${className}
        ${italic ? styles['text-italic'] : ''}
        ${underline ? styles['text-underline'] : ''}
        ${weight ? styles[`text-${weight}`] : ''}
        ${uppercase ? styles['text-uppercase'] : ''}
    `;
    const margins = getMarginStyles({ mt, mb, my });

    if (dangerouslySetInnerHTML) {
        return (
            <Component
                id={id}
                className={classNames}
                style={{ ...margins }}
                dangerouslySetInnerHTML={dangerouslySetInnerHTML}
                {...props}
            />
        );
    }

    return (
        <Component
            id={id}
            className={classNames}
            style={{ ...margins }}
            {...props}
        >
            {children}
        </Component>
    );
};

export const Text: React.FC<MarginProps & TextProps> = ({
    variant = 'p',
    size = 'default',
    italic = false,
    underline = false,
    weight = '400',
    uppercase = false,
    children,
    className,
    dangerouslySetInnerHTML,
    mt,
    mb,
    my,
    ...props
}) => {
    const Component = variant === 'p' ? 'p' : variant === 'list' ? 'ul' : 'div';
    const baseClassName = styles[`text-${variant}-${size}`];
    const classNames = `
        ${baseClassName}
        ${className}
        ${italic ? styles['text-italic'] : ''}
        ${underline ? styles['text-underline'] : ''}
        ${weight ? styles[`text-${weight}`] : ''}
        ${uppercase ? styles['text-uppercase'] : ''}
    `;
    const margins = getMarginStyles({ mt, mb, my });
    if (dangerouslySetInnerHTML) {
        return (
            <Component
                className={classNames}
                dangerouslySetInnerHTML={dangerouslySetInnerHTML}
                style={{ ...margins }}
                {...props}
            />
        );
    }

    return (
        <Component className={classNames} style={{ ...margins }} {...props}>
            {children}
        </Component>
    );
};

// Label component with size application
export const Label: React.FC<LabelProps> = ({
    id,
    size = 'default',
    children,
    italic = false,
    underline = false,
    weight = '400',
    uppercase = false,
    className,
    ...props
}) => {
    const baseClassName = styles[`label-${size}`];
    const classNames = `
        ${baseClassName}
        ${className}
        ${italic ? styles['text-italic'] : ''}
        ${underline ? styles['text-underline'] : ''}
        ${weight ? styles[`text-${weight}`] : ''}
        ${uppercase ? styles['text-uppercase'] : ''}
    `;
    return (
        <label id={id} className={classNames} {...props}>
            {children}
        </label>
    );
};
