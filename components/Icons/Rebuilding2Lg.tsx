import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgRebuilding2Lg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M124 122.5h-14.09v-6.64h7.14a1.5 1.5 0 0 0 1.5-1.5V98.27a1.5 1.5 0 0 0-1.5-1.5h-7.14V41a1.5 1.5 0 0 0-3 0v4.76c-2.16 1.9-12.72 10-26.61.13V41a1.5 1.5 0 0 0-3 0v4.87c-13.84 9.8-24.39 1.86-26.62-.09V41a1.5 1.5 0 0 0-3 0v4.82c-2.31 2-12.83 9.81-26.61 0V41a1.5 1.5 0 0 0-3 0v4.91A23.53 23.53 0 0 1 4.8 50.66a1.5 1.5 0 0 0 0 3 25.53 25.53 0 0 0 13.25-4.15V122.5H4a1.5 1.5 0 0 0 0 3h120a1.5 1.5 0 0 0 0-3Zm-8.44-22.73v13.09h-5.64V99.77ZM93.75 53.63a23.89 23.89 0 0 0 13.17-4.14v72.89a.5.5 0 0 0 0 .12H80.3v-73a25.22 25.22 0 0 0 13.45 4.13Zm-29.91 0a25.2 25.2 0 0 0 13.47-4.15V122.5H50.68v-73a23.82 23.82 0 0 0 13.16 4.13Zm-42.76 68.75V49.46a25.25 25.25 0 0 0 13.51 4.17 23.81 23.81 0 0 0 13.1-4.1v72.97H21.06a.5.5 0 0 0 .02-.12Z" />
            <path d="M64 91a4.32 4.32 0 1 0-4.32-4.32A4.32 4.32 0 0 0 64 91Z" />
        </SvgWrapper>
    );
}
export default SvgRebuilding2Lg;
