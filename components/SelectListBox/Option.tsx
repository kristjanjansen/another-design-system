'use client';
import React, { useRef } from 'react';
import { AriaOptionProps, useOption } from 'react-aria';
import { ListState } from 'react-stately';
import type { Node } from '@react-types/shared';
import classNames from 'classnames';

import { SvgTick } from '../Icons';
import { Text } from '../Typography';

import styles from './Option.module.scss';

interface OptionProps<V extends object> extends AriaOptionProps {
    item: Node<V>;
    state: ListState<V>;
}

const Option = <V extends object = never>({ item, state }: OptionProps<V>) => {
    const ref = useRef(null);
    const {
        optionProps,
        labelProps,
        descriptionProps,
        isSelected,
        isPressed,
        isFocusVisible,
    } = useOption({ key: item.key }, state, ref);

    const classList = classNames(styles.option, {
        [styles[`option--pressed`]]: isPressed,
        [styles[`option--selected`]]: isSelected,
        [styles[`option--focused`]]: isFocusVisible,
    });

    let title = null;
    let description = null;

    if (Array.isArray(item.rendered)) {
        [title, description] = item.rendered;
    }

    return (
        <li {...optionProps} className={classList} ref={ref}>
            <span className={styles.option__container}>
                <Text
                    variant="line"
                    weight="400"
                    className={styles.option__text}
                >
                    {title
                        ? React.cloneElement(title, labelProps)
                        : item.rendered}
                </Text>
                {description && (
                    <Text
                        variant="line"
                        weight="400"
                        className={styles.option__description}
                    >
                        {React.cloneElement(description, descriptionProps)}
                    </Text>
                )}
            </span>

            {isSelected && (
                <SvgTick aria-hidden="true" className={styles.option__icon} />
            )}
        </li>
    );
};

export default Option;
