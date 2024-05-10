import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgXAlt(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                d="M21 22a1 1 0 0 1-.71-.29L12 13.41l-8.29 8.3a1 1 0 0 1-1.42-1.42l8.3-8.29-8.3-8.29a1 1 0 0 1 1.42-1.42l8.29 8.3 8.29-8.3a1 1 0 1 1 1.42 1.42L13.41 12l8.3 8.29a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.3Z"
                stroke="#000"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
        </SvgWrapper>
    );
}
export default SvgXAlt;
