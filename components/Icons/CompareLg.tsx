import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgCompareLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M93.1 10.17H34.9a1.5 1.5 0 0 0-1.5 1.5v104.66a1.5 1.5 0 0 0 1.5 1.5h58.2a1.5 1.5 0 0 0 1.5-1.5V11.67a1.5 1.5 0 0 0-1.5-1.5Zm-1.5 104.66H36.4V13.17h55.2ZM26.38 23.67a1.5 1.5 0 0 0 0-3H2.62a1.5 1.5 0 0 0-1.5 1.5v83.66a1.5 1.5 0 0 0 1.5 1.5h23.76a1.5 1.5 0 1 0 0-3H4.12V23.67ZM125.38 20.67h-23.76a1.5 1.5 0 0 0 0 3h22.26v80.66h-22.26a1.5 1.5 0 0 0 0 3h23.76a1.5 1.5 0 0 0 1.5-1.5V22.17a1.5 1.5 0 0 0-1.5-1.5Z" />
        </SvgWrapper>
    );
}
export default SvgCompareLg;
