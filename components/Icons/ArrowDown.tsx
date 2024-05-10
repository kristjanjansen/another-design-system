import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgArrowDown(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M23.06 10.94a1.49 1.49 0 0 0-2.12 0l-7.44 7.44V2a1.5 1.5 0 0 0-3 0v16.38l-7.44-7.44a1.5 1.5 0 0 0-2.12 2.12l10 10a1.5 1.5 0 0 0 2.12 0l10-10a1.49 1.49 0 0 0 0-2.12Z" />
        </SvgWrapper>
    );
}
export default SvgArrowDown;
