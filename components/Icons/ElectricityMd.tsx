import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgElectricityMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="M23.56 63a1 1 0 0 1-.43-.1 1 1 0 0 1-.54-1.15l6.19-24.25H12.39a1 1 0 0 1-1-1.28l10-34.5a1 1 0 0 1 1-.72H40a1 1 0 0 1 1 1.28L34.9 23h16.71a1 1 0 0 1 .81 1.59l-28 38a1 1 0 0 1-.86.41Zm-9.84-27.5h16.35a1 1 0 0 1 .79.39 1 1 0 0 1 .17.86L25.8 57.29 49.63 25H33.57a1 1 0 0 1-1-1.28L38.62 3H23.15Z" />
        </SvgWrapper>
    );
}
export default SvgElectricityMd;
