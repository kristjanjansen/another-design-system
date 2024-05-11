import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgSwitchLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M50.7 94.19h26.6a1.5 1.5 0 0 0 1.5-1.5V35.31a1.5 1.5 0 0 0-1.5-1.5H50.7a1.5 1.5 0 0 0-1.5 1.5v57.38a1.5 1.5 0 0 0 1.5 1.5Zm1.5-3V65.5h23.6v25.69Zm23.6-54.38V62.5H52.2V36.81Z" />
            <path d="M64 80.48a9.26 9.26 0 0 0-7.69 4.11A1 1 0 0 0 58 85.7a7.24 7.24 0 0 1 12 0 1 1 0 0 0 .84.44.94.94 0 0 0 .55-.17 1 1 0 0 0 .28-1.38A9.25 9.25 0 0 0 64 80.48ZM64 23.35a3.54 3.54 0 1 0-3.54-3.54A3.55 3.55 0 0 0 64 23.35ZM64 104.39a3.54 3.54 0 1 0 3.54 3.54 3.55 3.55 0 0 0-3.54-3.54Z" />
            <path d="M113.58 2.56H14.42a1.5 1.5 0 0 0-1.5 1.5v119.88a1.5 1.5 0 0 0 1.5 1.5h99.16a1.5 1.5 0 0 0 1.5-1.5V4.06a1.5 1.5 0 0 0-1.5-1.5Zm-1.5 119.88H15.92V5.56h96.16Z" />
        </SvgWrapper>
    );
}
export default SvgSwitchLg;
