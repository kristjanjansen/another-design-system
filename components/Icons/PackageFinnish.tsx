import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgPackageFinnish(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
            {...props}
        >
            <path d="M60 0a60 60 0 1 0 60 60A60 60 0 0 0 60 0Zm0 116a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56Z" />
            <path d="M106.57 50H58.63V12.41a47.31 47.31 0 0 0-20 5V50h-25.2a47.7 47.7 0 0 0 0 20h25.2v32.56a47.31 47.31 0 0 0 20 5V70h47.94a47.7 47.7 0 0 0 0-20Z" />
        </SvgWrapper>
    );
}
export default SvgPackageFinnish;
