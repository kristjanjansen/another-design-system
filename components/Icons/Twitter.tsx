import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgTwitter(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M23 5.19a9.45 9.45 0 0 1-2.26 2.33v.59a12.64 12.64 0 0 1-.53 3.62 13.13 13.13 0 0 1-1.61 3.47 13.61 13.61 0 0 1-2.6 2.93 11.05 11.05 0 0 1-3.6 2 13.1 13.1 0 0 1-4.51.76 12.5 12.5 0 0 1-6.92-2 9.06 9.06 0 0 0 1.12.11 8.87 8.87 0 0 0 5.6-2 4.51 4.51 0 0 1-4.22-3.13 5.3 5.3 0 0 0 .85.07 4.79 4.79 0 0 0 1.19-.15 4.44 4.44 0 0 1-2.59-1.56 4.38 4.38 0 0 1-1-2.87v-.01a4.53 4.53 0 0 0 2 .57 4.44 4.44 0 0 1-1.45-1.61 4.3 4.3 0 0 1-.55-2.15 4.52 4.52 0 0 1 .61-2.27 12.72 12.72 0 0 0 4.12 3.33 12.68 12.68 0 0 0 5.18 1.39 5.41 5.41 0 0 1-.11-1A4.32 4.32 0 0 1 13 4.39a4.52 4.52 0 0 1 6.48.1 9 9 0 0 0 2.91-1.09 4.43 4.43 0 0 1-2 2.49 9.31 9.31 0 0 0 2.61-.7Z" />
        </SvgWrapper>
    );
}
export default SvgTwitter;
