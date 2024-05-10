import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgHole(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M117 75.46A20.09 20.09 0 0 0 120.8 64c0-17.58-25.48-31.88-56.8-31.88S7.2 46.42 7.2 64A20.09 20.09 0 0 0 11 75.46a1.49 1.49 0 0 0 .5.7C20 87.72 40.35 95.88 64 95.88s44-8.16 52.49-19.72a1.49 1.49 0 0 0 .51-.7ZM64 35.12c29.66 0 53.8 13 53.8 28.88a16.9 16.9 0 0 1-2.33 8.4C106.2 61.22 86.35 54.1 64 54.1s-42.2 7.12-51.47 18.3A16.9 16.9 0 0 1 10.2 64c0-15.92 24.14-28.88 53.8-28.88Zm0 57.76c-22.4 0-41.63-7.39-49.72-17.86C22.6 64.26 42.37 57.1 64 57.1s41.4 7.16 49.72 17.9C105.63 85.49 86.4 92.88 64 92.88Z" />
        </SvgWrapper>
    );
}
export default SvgHole;
