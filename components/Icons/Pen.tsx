import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgPen(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M22 2a5 5 0 0 0-7 0L.94 16a1.5 1.5 0 0 0-.44 1.05V22A1.5 1.5 0 0 0 2 23.5h5a1.5 1.5 0 0 0 1-.44L22 9a5 5 0 0 0 0-7ZM6.33 20.5H3.5v-2.83l9-9 2.83 2.83ZM19.92 6.92l-2.5 2.49-2.83-2.83 2.49-2.49a2 2 0 1 1 2.84 2.83Z" />
        </SvgWrapper>
    );
}
export default SvgPen;
