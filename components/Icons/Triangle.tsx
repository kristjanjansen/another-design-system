import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgTriangle(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M13.79 1.81c-1-2-2.59-2-3.58 0L1.12 20c-1 2 0 3.58 2.21 3.58h17.34c2.2 0 3.2-1.61 2.21-3.58Z" />
        </SvgWrapper>
    );
}
export default SvgTriangle;
