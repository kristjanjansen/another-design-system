import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgMoney(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M22 8.54a1 1 0 0 0-1 1v7.17H5.31a1 1 0 1 0 0 2H22a1 1 0 0 0 1-1V9.54a1 1 0 0 0-1-1Z" />
            <path d="M19.69 14.46V6.29a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8.17a1 1 0 0 0 1 1h16.69a1 1 0 0 0 1-1ZM3 9.5a2.26 2.26 0 0 0 .9.18 2.4 2.4 0 0 0 2.39-2.39h-1A1.39 1.39 0 0 1 3 8.35V7.29h14.69v4a2.45 2.45 0 0 0-.9-.18 2.4 2.4 0 0 0-2.39 2.39H3Zm12.4 4a1.39 1.39 0 0 1 1.39-1.39 1.35 1.35 0 0 1 .9.34v1.05Z" />
            <path d="M10.34 8a2.4 2.4 0 1 0 2.4 2.39A2.39 2.39 0 0 0 10.34 8Zm0 3.79a1.4 1.4 0 1 1 1.4-1.4 1.4 1.4 0 0 1-1.4 1.38Z" />
        </SvgWrapper>
    );
}
export default SvgMoney;
