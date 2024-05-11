import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgTagMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="M30.66 58.87a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42l27.53-27.53V9a1 1 0 0 1 2 0v21.1a1 1 0 0 1-.29.71L31.37 58.58a1 1 0 0 1-.71.29Zm-3.33-3.33a1.05 1.05 0 0 1-.71-.29L4.81 33.43a1 1 0 0 1 0-1.41l26.6-26.6a1 1 0 0 1 .7-.29h21.82a1 1 0 0 1 1 1v21.81a1 1 0 0 1-.3.71L28 55.25a1 1 0 0 1-.67.29ZM6.93 32.73l20.4 20.4 25.6-25.6V7.13h-20.4Zm38.16-14.17a3.62 3.62 0 0 1-2.55-1A3.6 3.6 0 1 1 48.69 15a3.6 3.6 0 0 1-3.6 3.59ZM44 16.1a1.6 1.6 0 0 0 2.69-1.1A1.6 1.6 0 0 0 44 13.84a1.61 1.61 0 0 0 0 2.26Z" />
        </SvgWrapper>
    );
}
export default SvgTagMd;
