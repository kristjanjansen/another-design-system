import { MutableRefObject, SetStateAction, useEffect, useState } from 'react';
import useResizeObserver from '@react-hook/resize-observer';

const useCompareChildWidthToParent = (
    targetParent: MutableRefObject<HTMLDivElement | null>,
    targetChild: MutableRefObject<HTMLDivElement | null>
) => {
    const [childSize, setChildSize] = useState(0);
    const [parentSize, setParentSize] = useState(0);
    const [initialWidth, setInitialWidth] = useState<number | undefined>(0);
    const [isMobile, setIsMobile] = useState(false);

    useResizeObserver(
        targetChild,
        (entry: { contentRect: { width: SetStateAction<number> } }) =>
            setChildSize(entry.contentRect.width)
    );

    useResizeObserver(
        targetParent,
        (entry: { contentRect: { width: SetStateAction<number> } }) =>
            setParentSize(entry.contentRect.width)
    );

    useEffect(() => {
        setInitialWidth(targetChild?.current?.scrollWidth);
    }, [targetChild]);

    useEffect(() => {
        if (initialWidth && parentSize !== 0) {
            if (childSize > initialWidth) setInitialWidth(childSize);
            if (initialWidth >= parentSize) setIsMobile(true);
            if (initialWidth < parentSize) setIsMobile(false);
        }
    }, [childSize, parentSize]);

    return { isMobile };
};

export default useCompareChildWidthToParent;
