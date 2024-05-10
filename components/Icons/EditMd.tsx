import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgEditMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="M2 63a1 1 0 0 1-.71-.29A1 1 0 0 1 1 61.8l3-15.12a1 1 0 0 1 .28-.53l32.39-32.34v-.06l.06-.05 6.55-6.55.05-.05 3.35-3.3A9.49 9.49 0 0 1 53.44 1a9.46 9.46 0 0 1 6.76 2.8 9.57 9.57 0 0 1 0 13.52l-3.29 3.29-6.62 6.62-32.41 32.4a1 1 0 0 1-.56.33L2.19 63Zm4-15.67-2.73 13.4 13.36-2.67.4-.4L6.33 47Zm9.8 6.27 2.64 2.65 29.69-29.68-2.65-2.65Zm-4.05-4.05 2.64 2.64 29.68-29.68-2.65-2.64Zm-4-4 2.58 2.58L40 18.45l-2.58-2.57ZM46.2 21.81l3.34 3.34 5.24-5.23-10.7-10.69-5.23 5.23 3.27 3.27 4 4Zm-.7-14L56.19 18.5l2.6-2.59A7.56 7.56 0 0 0 48.1 5.21ZM62 63H23.72a1 1 0 0 1 0-2H62a1 1 0 0 1 0 2Z" />
        </SvgWrapper>
    );
}
export default SvgEditMd;
