import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgTick(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M8.31 20.39h-.2a1.88 1.88 0 0 1-1.37-.84l-5.66-8.83a1.87 1.87 0 1 1 3.15-2l4.4 6.85L20 4.16a1.87 1.87 0 1 1 2.64 2.65l-13 13a1.9 1.9 0 0 1-1.33.58Z" />
        </SvgWrapper>
    );
}
export default SvgTick;
