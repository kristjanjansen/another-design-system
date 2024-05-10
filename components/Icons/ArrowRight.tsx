import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgArrowRight(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M10.94.94a1.49 1.49 0 0 0 0 2.12l7.44 7.44H2a1.5 1.5 0 0 0 0 3h16.38l-7.44 7.44a1.5 1.5 0 0 0 2.12 2.12l10-10a1.5 1.5 0 0 0 0-2.12l-10-10a1.49 1.49 0 0 0-2.12 0Z" />
        </SvgWrapper>
    );
}
export default SvgArrowRight;
