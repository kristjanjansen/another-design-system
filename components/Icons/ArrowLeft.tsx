import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgArrowLeft(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M13.06.94a1.49 1.49 0 0 1 0 2.12L5.62 10.5H22a1.5 1.5 0 0 1 0 3H5.62l7.44 7.44a1.5 1.5 0 0 1-2.12 2.12l-10-10a1.5 1.5 0 0 1 0-2.12l10-10a1.49 1.49 0 0 1 2.12 0Z" />
        </SvgWrapper>
    );
}
export default SvgArrowLeft;
