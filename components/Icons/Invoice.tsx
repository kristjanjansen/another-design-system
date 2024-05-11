import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgInvoice(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M20.4 23.5H3.6a1 1 0 0 1-1-1v-21a1 1 0 0 1 1-1h16.8a1 1 0 0 1 1 1v21a1 1 0 0 1-1 1Zm-15.8-2h14.8v-19H4.6Zm12.12-10.6H7.28a1 1 0 1 1 0-2h9.44a1 1 0 0 1 0 2Zm0-4.2H7.28a1 1 0 0 1 0-2h9.44a1 1 0 0 1 0 2Z" />
        </SvgWrapper>
    );
}
export default SvgInvoice;
