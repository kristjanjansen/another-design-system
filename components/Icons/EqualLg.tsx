import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgEqualLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M124.05 113.64h-6.87V41.77a1.5 1.5 0 0 0-1.5-1.5h-18a1.5 1.5 0 0 0-1.5 1.5v71.87h-7.45V41.77a1.5 1.5 0 0 0-1.5-1.5h-18a1.5 1.5 0 0 0-1.5 1.5v71.87h-7.44V41.77a1.5 1.5 0 0 0-1.5-1.5h-18a1.5 1.5 0 0 0-1.5 1.5v71.87h-7.45V41.77a1.5 1.5 0 0 0-1.5-1.5h-18a1.5 1.5 0 0 0-1.5 1.5v71.87H4a1.5 1.5 0 0 0 0 3h120.1a1.5 1.5 0 0 0 0-3Zm-110.23 0V43.27h15v70.37Zm28.45 0V43.27h15v70.37Zm28.44 0V43.27h15v70.37Zm28.45 0V43.27h15v70.37ZM12.32 20.85h100l-3.58 3.95a1.49 1.49 0 0 0 .11 2.12 1.47 1.47 0 0 0 1 .39 1.5 1.5 0 0 0 1.11-.49l5.85-6.46a1.38 1.38 0 0 0 .26-.43s0-.09 0-.13a1.32 1.32 0 0 0 .06-.39.76.76 0 0 0 0-.15 1.34 1.34 0 0 0-.1-.44s0-.05 0-.07a1.4 1.4 0 0 0-.3-.42s0 0 0-.05L110 11.79a1.5 1.5 0 0 0-2.09 2.15l4 3.91H12.32a1.5 1.5 0 0 0 0 3Z" />
        </SvgWrapper>
    );
}
export default SvgEqualLg;
