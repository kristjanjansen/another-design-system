import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgPackageSpot(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
            {...props}
        >
            <path d="M60 4A56 56 0 1 1 4 60 56.06 56.06 0 0 1 60 4m0-4a60 60 0 1 0 60 60A60 60 0 0 0 60 0Z" />
            <path d="M107.64 60a47.64 47.64 0 0 1-95.28 0l9 6.28 9.78-11.76 9.77 10.79 9.78-7.06 9.77 6.62 9.78-16.46L80 64.28l9.78-9.52 9.77 9.52Z" />
        </SvgWrapper>
    );
}
export default SvgPackageSpot;
