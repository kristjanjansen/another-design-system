import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgArrow(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M23 5.91a1.49 1.49 0 0 0-2.12 0l-9 9-8.8-8.84A1.5 1.5 0 0 0 1 8.19l9.9 9.9a1.5 1.5 0 0 0 2.12 0L23 8a1.49 1.49 0 0 0 0-2.09Z" />
        </SvgWrapper>
    );
}
export default SvgArrow;
