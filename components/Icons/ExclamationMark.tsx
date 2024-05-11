import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgExclamationMark(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M12 16.84a1.33 1.33 0 1 0 1.32 1.32A1.32 1.32 0 0 0 12 16.84ZM12 14.85a1 1 0 0 0 1-1V4.51a1 1 0 1 0-2 0v9.34a1 1 0 0 0 1 1Z" />
        </SvgWrapper>
    );
}
export default SvgExclamationMark;
