import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgInfoFill(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M12 1.78A10.22 10.22 0 1 0 22.22 12 10.21 10.21 0 0 0 12 1.78Zm1 15.45a1 1 0 0 1-2 0V11a1 1 0 0 1 2 0Zm-1-8.84A1.39 1.39 0 1 1 13.39 7 1.39 1.39 0 0 1 12 8.39Z" />
        </SvgWrapper>
    );
}
export default SvgInfoFill;
