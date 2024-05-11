import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgRefresh(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M13.91 9.32a1 1 0 0 0 .92.62h6.94a1 1 0 0 0 1-1V2a1 1 0 0 0-1.71-.71L19 3.34a11 11 0 1 0 3.59 12.3 1 1 0 1 0-1.87-.64 9 9 0 1 1-3.13-10.23l-3.47 3.46a1 1 0 0 0-.21 1.09Z" />
        </SvgWrapper>
    );
}
export default SvgRefresh;
