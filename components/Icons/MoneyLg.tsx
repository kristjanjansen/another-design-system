import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgMoneyLg(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M126 39.78a1.5 1.5 0 0 0-1.5 1.5v54.09h-112a1.5 1.5 0 0 0 0 3H126a1.5 1.5 0 0 0 1.5-1.5V41.28a1.5 1.5 0 0 0-1.5-1.5Z" />
            <path d="M30.87 88.38a1.52 1.52 0 0 0 .59-.12h84a1.5 1.5 0 0 0 1.5-1.5v-55.6a1.5 1.5 0 0 0-1.5-1.5H86.83a2.67 2.67 0 0 0-.4 0H22a1.84 1.84 0 0 0-.33 0 1.69 1.69 0 0 0-.33 0H2a1.5 1.5 0 0 0-1.5 1.5v55.6a1.5 1.5 0 0 0 1.5 1.5h28.28a1.52 1.52 0 0 0 .59.12Zm66.57-3.12A18.14 18.14 0 0 1 114 68.7v16.56ZM114 65.7a21.13 21.13 0 0 0-19.56 19.56H34.62l13.63-13.63a16.45 16.45 0 0 0 23.16-23.17l15.8-15.8H114ZM72.21 59a13.46 13.46 0 1 1-13.46-13.5A13.48 13.48 0 0 1 72.21 59ZM20.06 32.66A18.16 18.16 0 0 1 3.5 49.19V32.66ZM3.5 52.19a21.15 21.15 0 0 0 19.56-19.53H83L69.3 46.34a16.45 16.45 0 0 0-23.17 23.17L30.38 85.26H3.5Z" />
        </SvgWrapper>
    );
}
export default SvgMoneyLg;
