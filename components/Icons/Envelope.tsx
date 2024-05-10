import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgEnvelope(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M116.06 25.1a1.34 1.34 0 0 0-.21-.2 1.55 1.55 0 0 0-.82-.31h-102a1.58 1.58 0 0 0-.58.11 1.76 1.76 0 0 0-.45.3 1.65 1.65 0 0 0-.32.49 1.51 1.51 0 0 0-.11.52v75.87a1.51 1.51 0 0 0 .1.53 1.39 1.39 0 0 0 .33.59 1.56 1.56 0 0 0 .5.33 1.51 1.51 0 0 0 .56.11h101.87a1.51 1.51 0 0 0 .56-.11 1.56 1.56 0 0 0 .5-.33 1.39 1.39 0 0 0 .32-.48 1.51 1.51 0 0 0 .1-.53v-75.9a1.49 1.49 0 0 0-.35-.99Zm-2.63 73.23L78.69 64.06l15.61-15.4 19.13-19Zm-55.78-26A9 9 0 0 0 64 74.92a8.91 8.91 0 0 0 6.34-2.63l6.22-6.13 34.71 34.25H16.73l34.72-34.26Zm53.64-44.7-19.1 18.9-24 23.64A6 6 0 0 1 64 71.92a6 6 0 0 1-4.23-1.76L16.72 27.59ZM49.32 64 14.57 98.33V29.68Z" />
        </SvgWrapper>
    );
}
export default SvgEnvelope;
