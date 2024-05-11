import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgCaretRight(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M20.5 12a1.51 1.51 0 0 1-.44 1.06l-10 10a1.5 1.5 0 0 1-2.12-2.12L16.88 12 7.94 3.06A1.5 1.5 0 0 1 10.06.94l10 10A1.51 1.51 0 0 1 20.5 12Z" />
        </SvgWrapper>
    );
}
export default SvgCaretRight;
