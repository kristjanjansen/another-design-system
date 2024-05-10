import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgExcel(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-6 13-1.5-2.46c-.26-.45-.51-.92-.51-.92s-.22.48-.48.92L10 16H8.78l2.53-4.12L8.94 8h1.29l1.26 2.16c.25.44.51 1 .51 1s.23-.51.49-1L13.77 8h1.29l-2.37 3.88L15.22 16Z" />
        </SvgWrapper>
    );
}
export default SvgExcel;
