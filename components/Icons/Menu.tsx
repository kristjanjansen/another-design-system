import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgMenu(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M22 7.5H2a1.5 1.5 0 0 1 0-3h20a1.5 1.5 0 0 1 0 3Zm1.5 4.5a1.5 1.5 0 0 0-1.5-1.5H2a1.5 1.5 0 0 0 0 3h20a1.5 1.5 0 0 0 1.5-1.5Zm0 6a1.5 1.5 0 0 0-1.5-1.5H2a1.5 1.5 0 0 0 0 3h20a1.5 1.5 0 0 0 1.5-1.5Z" />
        </SvgWrapper>
    );
}
export default SvgMenu;
