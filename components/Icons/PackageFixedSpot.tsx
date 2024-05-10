import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgPackageFixedSpot(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
            {...props}
        >
            <path d="M60 0a60 60 0 1 0 60 60A60 60 0 0 0 60 0Zm0 116a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56Z" />
            <path d="m99.53 65.28-9.76-18.52L80 61.28l-9.76-6.87L60 59.87H12.36a47.64 47.64 0 1 0 95.28.13Z" />
        </SvgWrapper>
    );
}
export default SvgPackageFixedSpot;
