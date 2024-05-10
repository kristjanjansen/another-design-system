import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgStarFill(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M12 1.52a1.25 1.25 0 0 0-1.17.83c-.46 1.41-2 6.21-2 6.21H2.22a1.23 1.23 0 0 0-.67 2.24l5.28 3.84s-1.7 5.21-2 6.19a1.23 1.23 0 0 0 1.87 1.41c.71-.49 5.3-3.85 5.3-3.85s4.59 3.36 5.3 3.85a1.23 1.23 0 0 0 1.88-1.41c-.31-1-2-6.19-2-6.19l5.28-3.84a1.23 1.23 0 0 0-.67-2.24h-6.6s-1.55-4.8-2-6.21A1.25 1.25 0 0 0 12 1.52Z" />
        </SvgWrapper>
    );
}
export default SvgStarFill;
