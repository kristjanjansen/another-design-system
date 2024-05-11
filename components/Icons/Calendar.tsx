import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgCalendar(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M20.63 4.9h-3.34V2a1 1 0 0 0-2 0v2.9H8.71V2a1 1 0 0 0-2 0v2.9H3.37A2.38 2.38 0 0 0 1 7.27v13.36A2.37 2.37 0 0 0 3.37 23h17.26A2.37 2.37 0 0 0 23 20.63V7.27a2.38 2.38 0 0 0-2.37-2.37Zm-17.26 2h17.26a.38.38 0 0 1 .37.37v4.27H3V7.27a.38.38 0 0 1 .37-.37ZM20.63 21H3.37a.38.38 0 0 1-.37-.37v-7.09h18v7.09a.38.38 0 0 1-.37.37Z" />
        </SvgWrapper>
    );
}
export default SvgCalendar;
