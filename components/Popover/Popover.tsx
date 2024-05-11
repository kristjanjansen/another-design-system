'use client';
import React, { ReactNode, RefObject, useRef } from 'react';
import type { AriaPopoverProps } from 'react-aria';
import { Overlay, usePopover } from 'react-aria';
import { OverlayTriggerState } from 'react-stately';

import styles from './Popover.module.scss';

export interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
    className?: string;
    children: ReactNode;
    state: OverlayTriggerState;
    portalContainer?: Element | null;
    popoverRef?: RefObject<HTMLDivElement>;
}

const Popover = ({
    state,
    children,
    className,
    portalContainer,
    ...props
}: PopoverProps) => {
    const { popoverRef: refFromProps, isNonModal } = props;

    const fallbackRef = useRef(null);
    const popoverRef = refFromProps || fallbackRef;

    const { popoverProps, underlayProps } = usePopover(
        {
            ...props,
            popoverRef,
        },
        state
    );

    return (
        <Overlay
            portalContainer={portalContainer ? portalContainer : undefined}
        >
            {!isNonModal && (
                <div {...underlayProps} className={styles.underlay} />
            )}
            <div {...popoverProps} className={className} ref={popoverRef}>
                {children}
            </div>
        </Overlay>
    );
};

export default Popover;
