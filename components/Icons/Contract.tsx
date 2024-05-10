import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgContract(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M18 23.5H1.2a1 1 0 0 1-1-1v-21a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1v6.21a1 1 0 1 1-2 0V2.5H2.2v19H17v-4.42a1 1 0 0 1 2 0v5.42a1 1 0 0 1-1 1Zm-5.33-5a1 1 0 0 1-.72-.31 1 1 0 0 1 0-1.42L22.1 7.09a1 1 0 0 1 1.42 0 1 1 0 0 1 0 1.41l-10.16 9.75a1 1 0 0 1-.69.28ZM9.6 10.9H4.88a1 1 0 0 1 0-2H9.6a1 1 0 0 1 0 2Zm4.73-4.2H4.88a1 1 0 0 1 0-2h9.45a1 1 0 0 1 0 2Z" />
        </SvgWrapper>
    );
}
export default SvgContract;
