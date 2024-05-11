import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgFacebook(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M17.71 1.16v3.49h-2.07a2 2 0 0 0-1.54.48 2.19 2.19 0 0 0-.39 1.42v2.5h3.87L17.06 13h-3.35v10H9.66V13H6.29V9.05h3.37V6.17A5.12 5.12 0 0 1 11 2.36 5 5 0 0 1 14.7 1a21.12 21.12 0 0 1 3.01.16Z" />
        </SvgWrapper>
    );
}
export default SvgFacebook;
