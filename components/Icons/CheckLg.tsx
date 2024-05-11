import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgCheckLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M52.07 102.24a2 2 0 0 1-1.56-.74l-35-43.07a2 2 0 1 1 3.1-2.52l33.45 41.16 57.32-70.57a2 2 0 1 1 3.1 2.52L53.62 101.5a2 2 0 0 1-1.55.74Z" />
        </SvgWrapper>
    );
}
export default SvgCheckLg;
