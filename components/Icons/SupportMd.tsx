import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgSupportMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="M32 1.5A28.35 28.35 0 0 0 3.68 29.82v8.75a4.61 4.61 0 0 0 4.6 4.61h4.65c2.79 7.54 8.72 14.34 19.07 14.34a1 1 0 0 0 0-2c-15.64 0-19.06-16.83-19.06-23.31V30.5c5.92-.94 10.55-3.86 13.36-8.5 5.7 8.25 14.19 8.78 24.76 8.82v1.39a28.52 28.52 0 0 1-2 9.57A25 25 0 0 1 43 51.14a1 1 0 0 0 0 1.42 1 1 0 0 0 1.41 0 27.13 27.13 0 0 0 6.3-9.43h2.83c-.69 3.51-4.52 11.69-12 15.41a2.18 2.18 0 0 0-1.4-.52 2.22 2.22 0 1 0 2.2 2.36c8.49-4.15 12.59-13.35 13.26-17.25h.21a4.61 4.61 0 0 0 4.6-4.61v-8.7A28.35 28.35 0 0 0 32 1.5ZM12.26 41.18h-4a2.61 2.61 0 0 1-2.6-2.61v-7.75h3c.79 0 1.55 0 2.3-.1v1.49a32.64 32.64 0 0 0 1.3 8.97Zm14.83-21.65a1 1 0 0 0-.86-.49 1 1 0 0 0-.86.56c-2.93 6-8.7 9.22-16.69 9.22H5.7a26.32 26.32 0 0 1 52.6 0h-5c-12.03 0-20.73 0-26.21-9.29Zm28.63 21.65h-4.3a28.51 28.51 0 0 0 1.64-9v-1.36h5.26v7.75a2.61 2.61 0 0 1-2.6 2.61Z" />
            <path d="M21.6 35.59a2.06 2.06 0 1 0 2.06-2.06 2.06 2.06 0 0 0-2.06 2.06ZM40.34 37.65a2.06 2.06 0 1 0-2.06-2.06 2.06 2.06 0 0 0 2.06 2.06Z" />
        </SvgWrapper>
    );
}
export default SvgSupportMd;
