import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgMovingLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M125.61 52.66 109 30.45l-.11-.12a.23.23 0 0 0-.07-.07 1.06 1.06 0 0 0-.29-.22L56.44.77a1.51 1.51 0 0 0-1.44 0L2.86 30a1.39 1.39 0 0 0-.27.21 2.09 2.09 0 0 0-.22.28.59.59 0 0 0 0 .08 1.89 1.89 0 0 0-.11.25v.09a2.2 2.2 0 0 0 0 .36v65.39a1.48 1.48 0 0 0 .6 1.34L55 127.23h.05l.25.1h.08a1.41 1.41 0 0 0 .35 0 1.34 1.34 0 0 0 .35 0h.08l.25-.1h.06L108.56 98a1.48 1.48 0 0 0 .76-1.3V63.75l15.82-8.88a1.51 1.51 0 0 0 .47-2.21ZM55.71 3.8l22.47 12.62-48 28.15L6.66 31.34Zm-1.5 119.55L5.1 95.78V33.91L29.49 47.6l24.7 13.87Zm1.5-64.47L33.24 46.27l48-28.15 23.55 13.22Zm50.61 36.9-49.11 27.57V65.12l13.88 18.6a1.49 1.49 0 0 0 1.2.6 1.47 1.47 0 0 0 .73-.19l33.3-18.7ZM72.7 80.87 57.93 61.08l49.48-27.78 14.77 19.79Z" />
        </SvgWrapper>
    );
}
export default SvgMovingLg;
