import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgSearchSm(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="m23.21 21.79-7.16-7.16a8.74 8.74 0 1 0-1.42 1.42l7.16 7.16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Zm-14-5.85a6.72 6.72 0 1 1 6.72-6.72 6.73 6.73 0 0 1-6.71 6.72Z" />
        </SvgWrapper>
    );
}
export default SvgSearchSm;
