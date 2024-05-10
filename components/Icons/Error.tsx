import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgError(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M12 1.78A10.22 10.22 0 1 0 22.22 12 10.21 10.21 0 0 0 12 1.78Zm3.47 12.28a1 1 0 0 1 0 1.41 1 1 0 0 1-1.41 0L12 13.41l-2.06 2.06a1 1 0 0 1-.7.29 1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.41L10.59 12 8.53 9.94a1 1 0 0 1 1.41-1.41L12 10.59l2.06-2.06a1 1 0 0 1 1.41 1.41L13.41 12Z" />
        </SvgWrapper>
    );
}
export default SvgError;
