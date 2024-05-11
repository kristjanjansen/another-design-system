import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgHouseMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="m4.36 30.64 27.8-26.89L60 30.64a1 1 0 0 0 .69.28 1 1 0 0 0 .7-1.72L32.86 1.65a1 1 0 0 0-1.39 0L3 29.2a1 1 0 0 0 0 1.42 1 1 0 0 0 1.36.02Z" />
            <path d="M26.46 21.38a5.7 5.7 0 1 0 5.7-5.7 5.71 5.71 0 0 0-5.7 5.7Zm9.4 0a3.7 3.7 0 1 1-3.7-3.7 3.7 3.7 0 0 1 3.7 3.7ZM60.66 52h-8.5V29.92a1 1 0 0 0-2 0V52H37.59V41.28a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1V52H14.17V29.92a1 1 0 0 0-2 0V52h-8.5a1 1 0 0 0 0 2h57a1 1 0 0 0 0-2Zm-32.08-9.72h7V52h-7Z" />
        </SvgWrapper>
    );
}
export default SvgHouseMd;
