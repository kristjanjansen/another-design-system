import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgClose(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="m14.12 12 6.24-6.24a1.5 1.5 0 0 0-2.12-2.12L12 9.88 5.76 3.64a1.5 1.5 0 0 0-2.12 2.12L9.88 12l-6.24 6.24a1.49 1.49 0 0 0 0 2.12 1.5 1.5 0 0 0 2.12 0L12 14.12l6.24 6.24a1.5 1.5 0 0 0 2.12 0 1.49 1.49 0 0 0 0-2.12Z" />
        </SvgWrapper>
    );
}
export default SvgClose;
