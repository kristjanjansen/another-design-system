import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgSearchMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="M58.19 63a4.91 4.91 0 0 1-3.48-1.44L35.87 42.73a22.74 22.74 0 1 1 6.92-7l18.89 18.86a4.94 4.94 0 0 1 0 7A4.91 4.91 0 0 1 58.19 63ZM37.52 41.55l18.6 18.6A2.93 2.93 0 0 0 60.27 56L41.64 37.37a22.65 22.65 0 0 1-4.12 4.18ZM23.57 3a20.68 20.68 0 1 0 20.68 20.68A20.71 20.71 0 0 0 23.57 3ZM10.91 29.78a1 1 0 0 1-.93-.63 14.67 14.67 0 0 1 8.12-19 1 1 0 1 1 .74 1.85 12.65 12.65 0 0 0-7 16.44 1 1 0 0 1-.55 1.31 1 1 0 0 1-.38.03Z" />
        </SvgWrapper>
    );
}
export default SvgSearchMd;
