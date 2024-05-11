'use client';
import React, {
    ReactNode,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import { mergeProps, useFocusRing, useId, usePress } from 'react-aria';
import classNames from 'classnames';

import type { AccordionGroupState } from '../AccordionGroup/AccordionGroup';
import { AccordionContext } from '../AccordionGroup/AccordionGroup';
import { SvgArrow } from '../Icons';
import { Heading } from '../Typography';

import styles from '../AccordionGroup/AccordionGroup.module.scss';

export interface AccordionProps {
    id?: string;
    title: ReactNode;
    isOpen?: boolean;
    children: ReactNode;
    className?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
}

const Accordion = (props: AccordionProps) => {
    const stateOrNull = useContext(AccordionContext);
    const { mode, selectedKeys, setSelectedKeys } =
        (stateOrNull as AccordionGroupState) ?? {};
    const {
        id = '',
        title,
        isOpen,
        children,
        className,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
        'aria-describedby': ariaDescribedby,
    } = props;
    const panelRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const { isFocusVisible, focusProps } = useFocusRing();

    const [open, setOpen] = useState(isOpen);
    const [panelHeight, setPanelHeight] = useState(0);

    const headerId = useId();
    const panelId = useId();

    useEffect(() => {
        stateOrNull &&
            (selectedKeys?.includes(id) && setOpen(true),
            !selectedKeys?.includes(id) && setOpen(false));
    }, [stateOrNull]);

    const handleVisibilityToggle = () => {
        if (!stateOrNull) {
            setOpen((prev) => !prev);
        } else {
            if (mode === 'single') {
                selectedKeys?.includes(id) &&
                    (setSelectedKeys([]), setOpen(false));
                !selectedKeys?.includes(id) &&
                    (setSelectedKeys([id]), setOpen(true));
            }

            if (mode === 'multiple') {
                selectedKeys?.includes(id) &&
                    (setOpen(false),
                    setSelectedKeys((prev) =>
                        prev.filter((prevItem) => prevItem !== id)
                    ));
                !selectedKeys?.includes(id) &&
                    (setOpen(true), setSelectedKeys((prev) => [...prev, id]));
            }
        }
    };

    const { pressProps } = usePress({
        onPress: handleVisibilityToggle,
    });

    // Hide focusable elements inside accordion when it is closed
    useEffect(() => {
        if (panelRef.current) {
            const focusableElements = panelRef.current.querySelectorAll(
                'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

            focusableElements.forEach((element) => {
                element.setAttribute('tabindex', open ? '0' : '-1');
            });
        }
    }, [open]);

    // Make the accordion height responsive. Pure CSS solution does not seem to give expected results, with smooth animations, etc.
    useEffect(() => {
        const panelElement = wrapperRef.current;

        if (!panelElement) {
            return;
        }

        setPanelHeight(panelElement.scrollHeight);

        const handleScrollHeightChange = (entries: ResizeObserverEntry[]) => {
            setPanelHeight(entries[0].target.scrollHeight);
        };

        const observer = new ResizeObserver(handleScrollHeightChange);

        observer.observe(panelElement);

        return () => {
            observer.unobserve(panelElement);
        };
    }, [wrapperRef]);

    const accordionClassList = classNames(styles.accordion, className);

    const buttonClassList = classNames(styles.accordion__button, {
        [styles['accordion__button--open']]: open,
        [styles['accordion__button--focused']]: isFocusVisible,
    });

    const iconClassList = classNames(styles.accordion__icon, {
        [styles['accordion__icon--rotate']]: open,
    });

    const panelClassList = classNames(styles.accordion__panel, {
        [styles['accordion__panel--closed']]: !open,
    });

    return (
        <div className={accordionClassList}>
            <Heading variant="h5" as="h3" className={styles.accordion__header}>
                <button
                    {...mergeProps(focusProps, pressProps)}
                    id={headerId}
                    className={buttonClassList}
                    aria-expanded={open}
                    aria-controls={panelId}
                    aria-label={ariaLabel}
                    aria-labelledby={ariaLabelledby}
                    aria-describedby={ariaDescribedby}
                >
                    <span className={iconClassList}>
                        <SvgArrow aria-hidden={true} />
                    </span>
                    {title}
                </button>
            </Heading>

            <div
                role="region"
                id={panelId}
                className={panelClassList}
                ref={panelRef}
                style={open ? { height: panelHeight } : { height: 0 }}
                aria-labelledby={headerId}
                aria-hidden={!open}
            >
                <div
                    className={styles['accordion__panel-wrapper']}
                    ref={wrapperRef}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
