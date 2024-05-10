import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgDistance10Lg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M30.85 42.94c.19.28.4.31.62.16l3.26-2.25v17.26a.41.41 0 0 0 .47.46h2.71c.28 0 .43-.15.43-.46V37c0-.3-.15-.46-.43-.46h-2.37a.83.83 0 0 0-.56.16l-5.27 3.57a.45.45 0 0 0-.12.65ZM50.33 58.94c3.73 0 7.58-2.16 7.58-7.55v-7.8c0-5.3-3.85-7.43-7.58-7.43s-7.62 2.13-7.62 7.43v7.8c0 5.39 3.89 7.55 7.62 7.55Zm-4-15.29c0-3.17 2.16-4 4-4s4 .84 4 4v7.86c0 3.11-2.12 4-4 4s-4-.84-4-4ZM68.81 58.57h2.66a.41.41 0 0 0 .46-.46V45.78a8.25 8.25 0 0 1 2.46-.34c2 0 3.06 1 3.06 3.23v9.44a.42.42 0 0 0 .46.46h2.65a.4.4 0 0 0 .46-.46v-9.37a7.75 7.75 0 0 0-.4-2.5 4.85 4.85 0 0 1 2.71-.77c2.22 0 3.18 1.2 3.18 3.2v9.44c0 .31.15.46.43.46h2.68c.28 0 .43-.15.43-.46V48.8c0-4.32-2.77-6.57-6.62-6.57a8.24 8.24 0 0 0-4.66 1.42 7.13 7.13 0 0 0-4.47-1.42 14.18 14.18 0 0 0-5.58 1.21.55.55 0 0 0-.37.55v14.12a.41.41 0 0 0 .46.46ZM121.39 83.86a.64.64 0 0 0 0-.07 1.33 1.33 0 0 0 .08-.45v-.06a1.7 1.7 0 0 0-.11-.47 1.49 1.49 0 0 0-.3-.41l-7.26-7a1.5 1.5 0 0 0-2.09 2.15l4.6 4.45H11.37l4.09-4.52a1.5 1.5 0 1 0-2.22-2l-6.34 7-.08.13a2.52 2.52 0 0 0-.15.24.45.45 0 0 0-.06.12v.11a1.55 1.55 0 0 0-.07.43 1.5 1.5 0 0 0 .62 1.15l7.09 6.86a1.5 1.5 0 0 0 1 .42 1.46 1.46 0 0 0 1.08-.46 1.5 1.5 0 0 0 0-2.12l-4.57-4.42h104.85l-4.07 4.49a1.49 1.49 0 0 0 .11 2.12 1.47 1.47 0 0 0 1 .39 1.54 1.54 0 0 0 1.12-.49l6.33-7a1.45 1.45 0 0 0 .26-.43s.03-.15.03-.16Z" />
        </SvgWrapper>
    );
}
export default SvgDistance10Lg;