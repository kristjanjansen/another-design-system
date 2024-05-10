import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgWifiLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M64 82.91a14.83 14.83 0 0 0 0 29.66 14.83 14.83 0 1 0 0-29.66Zm8.37 23.19a11.82 11.82 0 0 1-8.37 3.47 11.83 11.83 0 1 1 8.37-3.47ZM124.58 40.53a85.76 85.76 0 0 0-121.16 0 1.49 1.49 0 0 0 0 2.12 1.51 1.51 0 0 0 2.12 0 82.76 82.76 0 0 1 116.92 0 1.5 1.5 0 0 0 2.12 0 1.49 1.49 0 0 0 0-2.12Z" />
            <path d="M64 38.73a68.39 68.39 0 0 0-48.68 20.16A1.5 1.5 0 1 0 17.45 61a65.84 65.84 0 0 1 93.1 0 1.51 1.51 0 0 0 2.13 0 1.51 1.51 0 0 0 0-2.12A68.41 68.41 0 0 0 64 38.73Z" />
            <path d="M30.79 76.5a1.5 1.5 0 0 0 2.12 2.13 44 44 0 0 1 62.2 0 1.5 1.5 0 1 0 2.12-2.13 47 47 0 0 0-66.44 0Z" />
        </SvgWrapper>
    );
}
export default SvgWifiLg;
