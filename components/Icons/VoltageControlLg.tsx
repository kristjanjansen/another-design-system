import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgVoltageControlLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M118.9 20.21H9.1a1.5 1.5 0 0 0-1.5 1.5v79.91a1.5 1.5 0 0 0 1.5 1.5h109.8a1.5 1.5 0 0 0 1.5-1.5V21.71a1.5 1.5 0 0 0-1.5-1.5Zm-1.5 79.91H10.6V23.21h106.8Z" />
            <path d="M19.42 64.61h47.07a1.5 1.5 0 0 0 1.5-1.5V32.38a1.5 1.5 0 0 0-1.5-1.5H19.42a1.5 1.5 0 0 0-1.5 1.5v30.73a1.5 1.5 0 0 0 1.5 1.5Zm1.5-30.73H65v27.73H20.92ZM31.46 104.79h-12a1.5 1.5 0 0 0 0 3h12a1.5 1.5 0 0 0 0-3ZM108.58 104.79h-12a1.5 1.5 0 0 0 0 3h12a1.5 1.5 0 0 0 0-3ZM108.58 92.74a1.5 1.5 0 0 0 1.5-1.5v-13.7a1.5 1.5 0 0 0-3 0v13.7a1.5 1.5 0 0 0 1.5 1.5ZM99.58 92.74a1.5 1.5 0 0 0 1.5-1.5v-13.7a1.5 1.5 0 0 0-3 0v13.7a1.5 1.5 0 0 0 1.5 1.5ZM90.58 92.74a1.5 1.5 0 0 0 1.5-1.5v-13.7a1.5 1.5 0 0 0-3 0v13.7a1.5 1.5 0 0 0 1.5 1.5ZM81.58 92.74a1.5 1.5 0 0 0 1.5-1.5v-13.7a1.5 1.5 0 0 0-3 0v13.7a1.5 1.5 0 0 0 1.5 1.5Z" />
            <path d="M43 35.14a20.81 20.81 0 0 0-20.83 20.78 1.5 1.5 0 0 0 3 0 17.78 17.78 0 1 1 35.56 0 1.5 1.5 0 0 0 3 0A20.8 20.8 0 0 0 43 35.14Z" />
            <path d="M33.35 45.66a1.49 1.49 0 0 0-2.12 0 1.51 1.51 0 0 0 0 2.12l11 11a1.48 1.48 0 0 0 1.06.44 1.45 1.45 0 0 0 1.06-.44 1.49 1.49 0 0 0 0-2.12Z" />
        </SvgWrapper>
    );
}
export default SvgVoltageControlLg;
