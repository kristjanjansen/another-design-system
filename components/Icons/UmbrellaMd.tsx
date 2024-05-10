import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgUmbrellaMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="M28.42 63a4.59 4.59 0 0 1-4.58-4.58 1 1 0 0 1 2 0 2.58 2.58 0 1 0 5.16 0v-27H7.24a1 1 0 0 1-1-1A25.79 25.79 0 0 1 31 4.63V2a1 1 0 0 1 2 0v2.63a25.79 25.79 0 0 1 24.76 25.74 1 1 0 0 1-1 1H33v27.05A4.58 4.58 0 0 1 28.42 63Zm17-33.63h10.32a23.8 23.8 0 0 0-17.5-21.93c4.19 4.1 7.04 12.25 7.23 21.93Zm-24.94 0h22.99C43.2 17 38.12 6.74 32.12 6.61h-.23C25.88 6.74 20.8 17 20.53 29.37Zm-12.27 0h10.32c.19-9.68 3-17.83 7.23-21.93a23.8 23.8 0 0 0-17.5 21.93Z" />
        </SvgWrapper>
    );
}
export default SvgUmbrellaMd;
