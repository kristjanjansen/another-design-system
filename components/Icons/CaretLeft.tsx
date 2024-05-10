import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgCaretLeft(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M3.5 12a1.51 1.51 0 0 0 .44 1.06l10 10a1.5 1.5 0 1 0 2.12-2.12L7.12 12l8.94-8.94A1.5 1.5 0 1 0 13.94.94l-10 10A1.51 1.51 0 0 0 3.5 12Z" />
        </SvgWrapper>
    );
}
export default SvgCaretLeft;
