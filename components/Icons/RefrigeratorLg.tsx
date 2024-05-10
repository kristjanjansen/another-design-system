import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgRefrigeratorLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M102.45 3.33h-76.9a5.5 5.5 0 0 0-5.5 5.5v103.52a5.51 5.51 0 0 0 5.5 5.5h2.38v3.06a3.77 3.77 0 0 0 3.77 3.76h8a3.77 3.77 0 0 0 3.76-3.76v-3.06h41.76v3.06a3.77 3.77 0 0 0 3.78 3.76h8a3.77 3.77 0 0 0 3.77-3.76v-3.06h1.67a5.51 5.51 0 0 0 5.5-5.5V8.83a5.5 5.5 0 0 0-5.49-5.5Zm-62 117.58a.76.76 0 0 1-.76.76h-8a.76.76 0 0 1-.77-.76v-3.06h9.55Zm57.3 0a.76.76 0 0 1-.77.76H89a.77.77 0 0 1-.77-.76v-3.06h9.56Zm7.17-8.56a2.5 2.5 0 0 1-2.5 2.5H25.55a2.5 2.5 0 0 1-2.5-2.5V50.94H105Zm0-64.41H23.05V8.83a2.5 2.5 0 0 1 2.5-2.5h76.9a2.5 2.5 0 0 1 2.5 2.5Z" />
            <path d="M36.54 18.46A1.5 1.5 0 0 0 35 20v16.88a1.5 1.5 0 0 0 3 0V20a1.5 1.5 0 0 0-1.46-1.54ZM36.54 81a1.5 1.5 0 0 0 1.5-1.5V62.6a1.5 1.5 0 0 0-3 0v16.92a1.5 1.5 0 0 0 1.5 1.48Z" />
        </SvgWrapper>
    );
}
export default SvgRefrigeratorLg;
