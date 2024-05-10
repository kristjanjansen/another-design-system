import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgPlugLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M120.47 42.4A61 61 0 0 0 86.13 7.9a61 61 0 1 0-36.06 116.19 1.32 1.32 0 0 0 .34 0 1.5 1.5 0 0 0 .34-3A57.95 57.95 0 1 1 85 10.7a58.59 58.59 0 0 1 31.32 79c-5.28 11.06-18.45 27.74-33.07 28.31-4.33.18-7.74-1-10.4-3.41-5.55-5.15-6.87-15.13-7.33-25.39 13.69-.66 24.58-9.88 24.58-21.12V48.78a1.5 1.5 0 0 0-1.5-1.5H39.36a1.5 1.5 0 0 0-1.5 1.5V68.1c0 11.28 11 20.52 24.7 21.13.48 10.94 1.94 21.69 8.29 27.58 3.23 3 7.45 4.42 12.55 4.21 7.07-.28 14.52-3.94 21.53-10.58A68.4 68.4 0 0 0 119.07 91a61 61 0 0 0 1.4-48.6ZM40.86 68.12V50.28h46.28V68.1c0 10-10.38 18.16-23.14 18.16s-23.14-8.15-23.14-18.14Z" />
            <path d="M53.4 41.86V24.58a1.5 1.5 0 1 0-3 0v17.28a1.5 1.5 0 0 0 3 0ZM77.6 41.86V24.58a1.5 1.5 0 0 0-3 0v17.28a1.5 1.5 0 0 0 3 0Z" />
        </SvgWrapper>
    );
}
export default SvgPlugLg;
