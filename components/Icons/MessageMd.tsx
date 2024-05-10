import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgMessageMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="M32 9.63c-13.95 0-25.3 9-25.3 20C6.7 34.88 9.35 40 14 43.68l-5.37 9.16a1 1 0 0 0-.05.93 1 1 0 0 0 .75.56 2.72 2.72 0 0 0 .52 0c.94 0 3.17-.24 7.17-1.91a39.67 39.67 0 0 0 7.27-3.8 31.92 31.92 0 0 0 7.71.98c14 0 25.3-9 25.3-20S46 9.63 32 9.63Zm0 38a29.46 29.46 0 0 1-7.65-1 1 1 0 0 0-.88.18 34 34 0 0 1-7.22 3.83 25.68 25.68 0 0 1-4.92 1.59l4.86-8.27a1 1 0 0 0-.27-1.31c-4.66-3.43-7.22-8-7.22-13 0-9.92 10.45-18 23.3-18s23.3 8.07 23.3 18S44.85 47.6 32 47.6Z" />
        </SvgWrapper>
    );
}
export default SvgMessageMd;
