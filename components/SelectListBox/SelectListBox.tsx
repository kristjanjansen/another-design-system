'use client';
import React, { MutableRefObject, useRef } from 'react';
import { AriaListBoxOptions, useListBox } from 'react-aria';
import { ListState } from 'react-stately';
import type { CollectionChildren } from '@react-types/shared';

import Option from './Option';

import styles from './SelectListBox.module.scss';

export interface SelectListBoxProps<V extends object>
    extends AriaListBoxOptions<V> {
    state: ListState<V>;
    children?: CollectionChildren<V>;
    listBoxRef?: MutableRefObject<null>;
}

const SelectListBox = <V extends object>(props: SelectListBoxProps<V>) => {
    const { listBoxRef: refFromProps, state } = props;

    const fallbackRef = useRef(null);
    const listBoxRef = refFromProps || fallbackRef;
    const { listBoxProps } = useListBox(props, state, listBoxRef);

    return (
        <ul className={styles.base} {...listBoxProps} ref={listBoxRef}>
            {[...state.collection].map((item) => (
                <Option key={item.key} item={item} state={state} />
            ))}
        </ul>
    );
};

export default SelectListBox;
