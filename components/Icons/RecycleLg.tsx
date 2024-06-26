import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgRecycleLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M75.26 112.05a49.34 49.34 0 0 1-50-78.62L33.13 39a1.47 1.47 0 0 0 1.62.07 1.48 1.48 0 0 0 .74-1.44L33.81 20a1.51 1.51 0 0 0-.65-1.09 1.49 1.49 0 0 0-1.25-.21l-16.68 4.66a1.46 1.46 0 0 0-1.07 1.18 1.51 1.51 0 0 0 .61 1.46l8.05 5.67A52.36 52.36 0 0 0 75.94 115a1.5 1.5 0 0 0-.68-2.92ZM19.09 25.4 31 22.1l1.2 12.53ZM113.13 102.41l-8.21-5.79A52.36 52.36 0 0 0 52 13.05a1.5 1.5 0 1 0 .65 2.95 49.34 49.34 0 0 1 49.81 78.92l-7.69-5.42a1.53 1.53 0 0 0-1.62-.07 1.5 1.5 0 0 0-.74 1.44l1.68 17.57a1.5 1.5 0 0 0 1.5 1.35 1.41 1.41 0 0 0 .4-.05l16.68-4.63a1.47 1.47 0 0 0 1.07-1.19 1.5 1.5 0 0 0-.61-1.51Zm-16.22 3.93-1.2-12.53 13.1 9.23Z" />
        </SvgWrapper>
    );
}
export default SvgRecycleLg;
