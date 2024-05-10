import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgCaretDown(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M12 18.5a1.51 1.51 0 0 1-1.06-.44l-10-10a1.5 1.5 0 0 1 2.12-2.12L12 14.88l8.94-8.94a1.5 1.5 0 1 1 2.12 2.12l-10 10a1.51 1.51 0 0 1-1.06.44Z" />
        </SvgWrapper>
    );
}
export default SvgCaretDown;
