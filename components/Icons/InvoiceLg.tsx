import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgInvoiceLg(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M33.11 92.42h61.78a1.5 1.5 0 0 0 1.5-1.5V48.07a1.5 1.5 0 0 0-1.5-1.5H33.11a1.5 1.5 0 0 0-1.5 1.5v42.85a1.5 1.5 0 0 0 1.5 1.5Zm60.28-17.29H77.64V63.85h15.75Zm-18.75 0h-40V63.85h40Zm-40 3h40v11.29h-40Zm43 11.29V78.13h15.75v11.29Zm15.75-28.57H77.64V49.57h15.75ZM74.64 49.57v11.28h-40V49.57Z" />
            <path d="M112.7.5H15.3A1.5 1.5 0 0 0 13.8 2v124a1.5 1.5 0 0 0 1.5 1.5h97.4a1.5 1.5 0 0 0 1.5-1.5V2a1.5 1.5 0 0 0-1.5-1.5Zm-1.5 124H16.8V3.5h94.4Z" />
            <path d="M95 106.45H76.22a1.5 1.5 0 0 0 0 3H95a1.5 1.5 0 0 0 0-3ZM42.54 31.84h42.92a1.5 1.5 0 0 0 1.5-1.5V19.75a1.5 1.5 0 0 0-1.5-1.5H42.54a1.5 1.5 0 0 0-1.5 1.5v10.59a1.5 1.5 0 0 0 1.5 1.5ZM44 21.25h40v7.59H44Z" />
        </SvgWrapper>
    );
}
export default SvgInvoiceLg;
