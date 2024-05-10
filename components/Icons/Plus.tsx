import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgPlus(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M22 10.5h-8.5V2a1.5 1.5 0 0 0-3 0v8.5H2a1.5 1.5 0 0 0 0 3h8.5V22a1.5 1.5 0 0 0 3 0v-8.5H22a1.5 1.5 0 0 0 0-3Z" />
        </SvgWrapper>
    );
}
export default SvgPlus;
