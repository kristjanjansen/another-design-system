import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgCaretUpdown(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M12 23.5a1.51 1.51 0 0 1-1.06-.44l-5-5a1.5 1.5 0 0 1 2.12-2.12L12 19.88l3.94-3.94a1.5 1.5 0 0 1 2.12 2.12l-5 5a1.51 1.51 0 0 1-1.06.44Zm6.06-15.44a1.49 1.49 0 0 0 0-2.12l-5-5a1.49 1.49 0 0 0-2.12 0l-5 5a1.5 1.5 0 0 0 2.12 2.12L12 4.12l3.94 3.94a1.5 1.5 0 0 0 2.12 0Z" />
        </SvgWrapper>
    );
}
export default SvgCaretUpdown;
