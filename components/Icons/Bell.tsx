import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgBell(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M3.49 18.45a1.41 1.41 0 0 1-1-2.42l2.76-2.76V7.73A6.73 6.73 0 0 1 12 1a6.74 6.74 0 0 1 6.73 6.73v5.54L21.5 16a1.4 1.4 0 0 1-1 2.4ZM12 3a4.73 4.73 0 0 0-4.73 4.73v5.95a1 1 0 0 1-.29.71l-2.06 2.06h14.16L17 14.39a1 1 0 0 1-.29-.71V7.73A4.73 4.73 0 0 0 12 3Zm3.33 17.9a1 1 0 0 0-1.76-.9 2 2 0 0 1-3.47 0 1 1 0 1 0-1.76.94 4 4 0 0 0 7 0Z" />
        </SvgWrapper>
    );
}
export default SvgBell;
