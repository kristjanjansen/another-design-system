import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgData(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M22.76 21.5H1.24a1 1 0 0 1-1-1V6.73a1 1 0 0 1 1-1h5.38a1 1 0 0 1 1 1v1.16H11V3.5a1 1 0 0 1 1-1h5.38a1 1 0 0 1 1 1v1.16h4.38a1 1 0 0 1 1 1V20.5a1 1 0 0 1-1 1Zm-4.38-2h3.38V6.66h-3.38Zm-5.38 0h3.38v-15H13Zm-5.38 0H11V9.89H7.62Zm-5.38 0h3.38V7.73H2.24Z" />
        </SvgWrapper>
    );
}
export default SvgData;
