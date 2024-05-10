import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgDayLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M63.84 37.35a2.5 2.5 0 0 0 2.5-2.5v-11a2.5 2.5 0 1 0-5 0v11a2.5 2.5 0 0 0 2.5 2.5ZM84.5 45.78a2.5 2.5 0 0 0 1.77-.78L94 37.29a2.5 2.5 0 0 0-3.54-3.54l-7.76 7.76a2.51 2.51 0 0 0 1.77 4.27ZM104.12 61.34h-11a2.5 2.5 0 0 0 0 5h11a2.5 2.5 0 0 0 0-5ZM86.49 82.73A2.5 2.5 0 0 0 83 86.27L90.71 94a2.51 2.51 0 0 0 3.54 0 2.52 2.52 0 0 0 0-3.54ZM64.16 90.65a2.5 2.5 0 0 0-2.5 2.5v11a2.5 2.5 0 0 0 5 0v-11a2.5 2.5 0 0 0-2.5-2.5ZM41.73 83 34 90.71a2.52 2.52 0 0 0 0 3.54 2.51 2.51 0 0 0 3.54 0l7.76-7.76A2.5 2.5 0 0 0 41.73 83ZM37.35 64.16a2.5 2.5 0 0 0-2.5-2.5h-11a2.5 2.5 0 1 0 0 5h11a2.5 2.5 0 0 0 2.5-2.5ZM41.51 45.27a2.53 2.53 0 0 0 1.77.73A2.5 2.5 0 0 0 45 41.73L37.29 34a2.5 2.5 0 1 0-3.54 3.54ZM64 42.82A21.18 21.18 0 1 0 85.18 64 21.2 21.2 0 0 0 64 42.82Zm0 37.36A16.18 16.18 0 1 1 80.18 64 16.2 16.2 0 0 1 64 80.18Z" />
        </SvgWrapper>
    );
}
export default SvgDayLg;
