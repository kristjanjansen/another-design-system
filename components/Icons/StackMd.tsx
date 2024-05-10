import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgStackMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="M32 63a1 1 0 0 1-.48-.12l-30-16.56a1 1 0 0 1-.52-.88 1 1 0 0 1 .52-.87l5.94-3.27a1 1 0 0 1 1 1.75l-4.37 2.39L32 60.86l27.91-15.42-4.3-2.37a1 1 0 0 1 1-1.75l5.88 3.25a1 1 0 0 1 .52.87 1 1 0 0 1-.52.88l-30 16.56A1 1 0 0 1 32 63Zm0-11.27a.91.91 0 0 1-.48-.13l-30-16.55a1 1 0 0 1-.52-.88 1 1 0 0 1 .52-.87L7.46 30a1 1 0 0 1 1 1.75l-4.37 2.42L32 49.58l27.91-15.41-4.3-2.37a1 1 0 0 1 1-1.75l5.88 3.25a1 1 0 0 1 .52.87 1 1 0 0 1-.52.88l-30 16.55a.91.91 0 0 1-.49.13Zm0-11.27a1 1 0 0 1-.48-.13l-30-16.56a1 1 0 0 1-.52-.88 1 1 0 0 1 .55-.89l14-7.44a1 1 0 0 1 .94 1.77L4.12 22.92 32 38.31 59.91 22.9 48 16.34a1 1 0 0 1 1-1.75L62.46 22a1 1 0 0 1 .52.88 1 1 0 0 1-.52.87l-30 16.56a1 1 0 0 1-.46.15Zm.48-15.2a12.13 12.13 0 1 1 5.69-22.84 1 1 0 0 1 .42 1.35 1 1 0 0 1-1.36.41 10.13 10.13 0 1 0 5.38 9 1 1 0 0 1 2 0 12.14 12.14 0 0 1-12.13 12.08Zm-.35-7.1a1 1 0 0 1-.71-.29l-5.18-5.19a1 1 0 0 1 1.41-1.42l4.48 4.49 9.06-9.06a1 1 0 1 1 1.42 1.41l-9.77 9.77a1 1 0 0 1-.71.29Z" />
        </SvgWrapper>
    );
}
export default SvgStackMd;
