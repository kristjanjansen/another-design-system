import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgExclamation(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M12 13.41a1 1 0 0 0 1-1V6.19a1 1 0 1 0-2 0v6.22a1 1 0 0 0 1 1ZM12 15a1.39 1.39 0 1 0 1.39 1.39A1.39 1.39 0 0 0 12 15Z" />
        </SvgWrapper>
    );
}
export default SvgExclamation;
