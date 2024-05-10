import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgXLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="m66.83 64 40-40a2 2 0 1 0-2.83-2.81l-40 40-40-40A2 2 0 0 0 21.19 24l40 40-40 40a2 2 0 1 0 2.81 2.81l40-40 40 40a2 2 0 1 0 2.83-2.83Z" />
        </SvgWrapper>
    );
}
export default SvgXLg;
