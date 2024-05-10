import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgSuccess(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M12 1.78A10.22 10.22 0 1 0 22.22 12 10.21 10.21 0 0 0 12 1.78Zm5 7.58-5.3 6.54a1 1 0 0 1-.78.37 1 1 0 0 1-.77-.37L7 12a1 1 0 0 1 .14-1.4 1 1 0 0 1 1.41.14l2.38 2.93 4.53-5.57A1 1 0 1 1 17 9.36Z" />
        </SvgWrapper>
    );
}
export default SvgSuccess;
