import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgWebLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M108.48 8.17h-89A11.51 11.51 0 0 0 8 19.67v88.66a11.51 11.51 0 0 0 11.5 11.5h89a11.51 11.51 0 0 0 11.5-11.5V19.67a11.51 11.51 0 0 0-11.52-11.5ZM117 108.33a8.52 8.52 0 0 1-8.5 8.5h-89a8.52 8.52 0 0 1-8.5-8.5v-75.5h106Zm0-78.5H11V19.67a8.52 8.52 0 0 1 8.5-8.5h89a8.52 8.52 0 0 1 8.5 8.5Z" />
            <path d="M25.15 58.39h77.7a1.5 1.5 0 0 0 0-3h-77.7a1.5 1.5 0 1 0 0 3ZM25.15 72.08h77.7a1.5 1.5 0 0 0 0-3h-77.7a1.5 1.5 0 1 0 0 3ZM25.15 85.76h64.57a1.5 1.5 0 0 0 0-3H25.15a1.5 1.5 0 1 0 0 3ZM20.83 17.93a2.56 2.56 0 1 0 2.56 2.55 2.55 2.55 0 0 0-2.56-2.55ZM41.31 17.93a2.56 2.56 0 1 0 2.56 2.55 2.55 2.55 0 0 0-2.56-2.55ZM31.07 17.93a2.56 2.56 0 1 0 2.56 2.55 2.55 2.55 0 0 0-2.56-2.55Z" />
        </SvgWrapper>
    );
}
export default SvgWebLg;
