import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgPackageEqual(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
            {...props}
        >
            <path d="M60 4A56 56 0 1 1 4 60 56.06 56.06 0 0 1 60 4m0-4a60 60 0 1 0 60 60A60 60 0 0 0 60 0Z" />
            <path d="M81.35 86.29 55.08 60H22.21l16.44-16.42L55.05 60H65L38.7 33.7 12.38 60a47.62 47.62 0 0 0 95.24 0Z" />
            <path d="M97.74 60.01H64.97L81.36 76.4l16.38-16.39z" />
        </SvgWrapper>
    );
}
export default SvgPackageEqual;
