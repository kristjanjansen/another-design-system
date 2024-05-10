import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgLock(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M20.73 24H3.27a1.5 1.5 0 0 1-1.5-1.5V11.07a1.5 1.5 0 0 1 1.5-1.5H5V7a7 7 0 0 1 14 0v2.57h1.77a1.5 1.5 0 0 1 1.5 1.5V22.5a1.5 1.5 0 0 1-1.54 1.5Zm-16-3h14.5v-8.43H4.77ZM8 9.57h8V7a4 4 0 0 0-8 0Z" />
        </SvgWrapper>
    );
}
export default SvgLock;
