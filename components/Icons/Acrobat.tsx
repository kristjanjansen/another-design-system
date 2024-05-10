import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgAcrobat(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M7.91 15.89a.44.44 0 0 0 .45.44.41.41 0 0 0 .3-.11 9.85 9.85 0 0 0 .84-1.34 7.88 7.88 0 0 0-1.47.7.46.46 0 0 0-.12.31ZM12 8.11a.43.43 0 0 0-.44-.44.44.44 0 0 0-.45.44 5.2 5.2 0 0 0 .51 1.61A7.49 7.49 0 0 0 12 8.11ZM11 13.59c.64-.24 1.28-.48 1.94-.66a8.6 8.6 0 0 1-1.15-1.46 21.76 21.76 0 0 1-.79 2.12Z" />
            <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-3.87 11.44a4.52 4.52 0 0 1-2.64-1 23.72 23.72 0 0 0-3 1 14.89 14.89 0 0 1-1.31 2.17 1.12 1.12 0 0 1-1.91-.79 1.15 1.15 0 0 1 .32-.79 11 11 0 0 1 2.5-1.15 21.17 21.17 0 0 0 1.24-3.23 6.54 6.54 0 0 1-.86-2.58 1.11 1.11 0 0 1 2.22 0 9.32 9.32 0 0 1-.64 2.52 8.32 8.32 0 0 0 1.61 2.1 8.92 8.92 0 0 1 2.47-.51 1.11 1.11 0 0 1 0 2.22Z" />
            <path d="M16.13 12.89a7.86 7.86 0 0 0-1.78.35 4.21 4.21 0 0 0 1.78.54.45.45 0 0 0 .45-.45.44.44 0 0 0-.45-.44Z" />
        </SvgWrapper>
    );
}
export default SvgAcrobat;
