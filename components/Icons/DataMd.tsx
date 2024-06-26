import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgDataMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="M61.71 26.37H50.82v-3.1a1 1 0 0 0-1-1H37.94a1 1 0 0 0-1 1v11.29h-9.88v-3.41a1 1 0 0 0-1-1H14.18a1 1 0 0 0-1 1v7.6H2.29a1 1 0 0 0-1 1V62a1 1 0 0 0 1 1h59.42a1 1 0 0 0 1-1V27.37a1 1 0 0 0-1-1ZM3.29 40.75h9.89V61H3.29Zm11.89-1v-7.6h9.88V61h-9.88Zm11.88-3.19h9.88V61h-9.88Zm11.88-1V24.27h9.88V61h-9.88ZM60.71 61h-9.89V28.37h9.89ZM8.24 22.17a4.5 4.5 0 0 0 4.49-4.49 4.45 4.45 0 0 0-.17-1.16l4.12-2.18A4.44 4.44 0 0 0 20.12 16a4.49 4.49 0 0 0 4-2.57l3.35.82a4.49 4.49 0 1 0 8.64-1.76L41 8.89a4.42 4.42 0 0 0 6.37-.58l4 2a4.92 4.92 0 0 0-.13 1 4.56 4.56 0 1 0 1-2.82l-4.06-2a4.34 4.34 0 0 0 .13-1 4.49 4.49 0 1 0-9 0 4.34 4.34 0 0 0 .39 1.8L35 10.86a4.43 4.43 0 0 0-3-1.15 4.49 4.49 0 0 0-4 2.58l-3.34-.82a4.49 4.49 0 0 0-9 0 4.17 4.17 0 0 0 .14 1.06l-4.15 2.2a4.48 4.48 0 1 0-3.38 7.41ZM55.76 8.84a2.49 2.49 0 1 1-2.49 2.49 2.49 2.49 0 0 1 2.49-2.49ZM43.88 3a2.49 2.49 0 1 1-2.49 2.49A2.49 2.49 0 0 1 43.88 3ZM32 11.71a2.49 2.49 0 1 1-2.49 2.49A2.5 2.5 0 0 1 32 11.71ZM20.12 9a2.5 2.5 0 1 1-2.49 2.5A2.5 2.5 0 0 1 20.12 9ZM8.24 15.19a2.49 2.49 0 1 1-2.49 2.49 2.49 2.49 0 0 1 2.49-2.49Z" />
        </SvgWrapper>
    );
}
export default SvgDataMd;
