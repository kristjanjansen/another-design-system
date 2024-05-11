import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgSliders(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M2 8.3h2.72a3.47 3.47 0 0 0 6.67 0H22a1 1 0 0 0 0-2H11.39a3.47 3.47 0 0 0-6.67 0H2a1 1 0 0 0 0 2ZM22 15.7h-2.72a3.47 3.47 0 0 0-6.67 0H2a1 1 0 0 0 0 2h10.61a3.47 3.47 0 0 0 6.67 0H22a1 1 0 0 0 0-2Z" />
        </SvgWrapper>
    );
}
export default SvgSliders;
