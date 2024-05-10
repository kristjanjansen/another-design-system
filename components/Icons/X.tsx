import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgX(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M22 23.5a1.51 1.51 0 0 1-1.06-.44L12 14.12l-8.94 8.94a1.5 1.5 0 0 1-2.12-2.12L9.88 12 .94 3.06A1.5 1.5 0 0 1 3.06.94L12 9.88 20.94.94a1.5 1.5 0 0 1 2.12 2.12L14.12 12l8.94 8.94a1.49 1.49 0 0 1 0 2.12 1.51 1.51 0 0 1-1.06.44Z" />
        </SvgWrapper>
    );
}
export default SvgX;
