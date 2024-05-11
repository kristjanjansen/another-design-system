import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgFlexiMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="M50.71 37.11a7.17 7.17 0 0 0-4.78-6.73l-26.48-8.56 26.48-8.57a7.17 7.17 0 0 0 4.78-6.73 1 1 0 0 0-1-1 1 1 0 0 0-1 1 5.2 5.2 0 0 1-3.39 4.82l-27.25 8.82a6.67 6.67 0 0 0-1 .44 5.42 5.42 0 0 1-1.76-3.86 5.21 5.21 0 0 1 3.39-4.83L45.93 3.1a1 1 0 1 0-.61-1.9L18.07 10a7.17 7.17 0 0 0-4.78 6.73 7.43 7.43 0 0 0 2.14 5.08 7.41 7.41 0 0 0-2.14 5.07 7.17 7.17 0 0 0 4.78 6.73l26.48 8.56-26.48 8.58a7.17 7.17 0 0 0-4.78 6.73 1 1 0 0 0 1 1 1 1 0 0 0 1-1 5.2 5.2 0 0 1 3.39-4.82l27.25-8.81a6.67 6.67 0 0 0 1-.44 5.42 5.42 0 0 1 1.76 3.86 5.21 5.21 0 0 1-3.39 4.83l-27.23 8.8a1 1 0 0 0 .3 2 1.06 1.06 0 0 0 .31-.05L45.93 54a7.18 7.18 0 0 0 4.78-6.73 7.43 7.43 0 0 0-2.14-5.08 7.41 7.41 0 0 0 2.14-5.08ZM47 41a6.67 6.67 0 0 0-1-.44l-27.32-8.84a5.2 5.2 0 0 1-3.39-4.83A5.42 5.42 0 0 1 17.05 23a6.67 6.67 0 0 0 1 .44l27.25 8.81a5.2 5.2 0 0 1 3.39 4.83A5.42 5.42 0 0 1 47 41Z" />
        </SvgWrapper>
    );
}
export default SvgFlexiMd;
