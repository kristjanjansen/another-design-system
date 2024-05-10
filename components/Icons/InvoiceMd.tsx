import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgInvoiceMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="M17.05 46h29.89a1 1 0 0 0 1-1V24.29a1 1 0 0 0-1-1H17.05a1 1 0 0 0-1 1V45a1 1 0 0 0 1 1Zm28.89-8.91h-7.06V32.2h7.06Zm-9.06 0H18.05V32.2h18.83Zm-18.83 2h18.83V44H18.05ZM38.88 44v-4.89h7.06V44Zm7.06-13.8h-7.06v-4.91h7.06Zm-9.06-4.91v4.91H18.05v-4.91Z" />
            <path d="M55.56 1H8.44a1 1 0 0 0-1 1v60a1 1 0 0 0 1 1h47.12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Zm-1 60H9.44V3h45.12Z" />
            <path d="M47 52.27h-9.09a1 1 0 0 0 0 2H47a1 1 0 0 0 0-2ZM21.61 16.71h20.78a1 1 0 0 0 1-1v-5.12a1 1 0 0 0-1-1H21.61a1 1 0 0 0-1 1v5.12a1 1 0 0 0 1 1Zm1-5.12h18.78v3.12H22.61Z" />
        </SvgWrapper>
    );
}
export default SvgInvoiceMd;
