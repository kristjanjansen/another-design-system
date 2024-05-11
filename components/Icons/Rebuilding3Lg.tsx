import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgRebuilding3Lg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M124 122.5h-19.75V94.64a1.51 1.51 0 0 0-.65-1.23L81.4 78.05a1.52 1.52 0 0 0-1.71 0l-22.2 15.36a1.5 1.5 0 0 0-.64 1.23v27.86H33.63V20.79h14v6.53a1.46 1.46 0 0 0 .16.66 1.5 1.5 0 0 0 1 1.74c1 .33 25 8.07 74.84 8.07a1.5 1.5 0 0 0 0-3c-44 0-68.18-6.26-73-7.65v-6.35h9.59a1.5 1.5 0 0 0 0-3H33.64V4a1.5 1.5 0 0 0-3 0v13.79H4a1.5 1.5 0 0 0 0 3h10.62v6.53a1.5 1.5 0 1 0 3 0v-6.53h13V122.5H4a1.5 1.5 0 0 0 0 3h120a1.5 1.5 0 0 0 0-3Zm-37.45 0h-12v-20.7h12Zm3 0v-22.2a1.5 1.5 0 0 0-1.5-1.5h-15a1.5 1.5 0 0 0-1.5 1.5v22.2h-11.7V95.43l20.7-14.32 20.7 14.32v27.07Z" />
        </SvgWrapper>
    );
}
export default SvgRebuilding3Lg;
