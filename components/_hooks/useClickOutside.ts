import { RefObject, useEffect, useRef } from 'react';

function useClickOutside<E extends HTMLDivElement>(
    innerRef: RefObject<E>,
    callback?: (event: { target: E }) => void
) {
    type Callback = (event: { target: E }) => void;

    const callbackRef = useRef<Callback>();
    callbackRef.current = callback;

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (
                innerRef.current &&
                callbackRef.current &&
                !innerRef.current?.contains(e.target as Node)
            ) {
                callbackRef.current(e as unknown as { target: E });
            }
            return null as unknown;
        };
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [innerRef.current]);
}

export default useClickOutside;
