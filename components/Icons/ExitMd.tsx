import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgExitMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="m62.7 31.2-6-6a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41l4.32 4.29H32a1 1 0 0 0 0 2h27.57l-4.32 4.28A1 1 0 0 0 56 38.9a1 1 0 0 0 .71-.29l6-6a1 1 0 0 0 .3-.71 1 1 0 0 0-.31-.7Z" />
            <path d="M47.58 40.53a1 1 0 0 0-1 1v7.31a2.07 2.07 0 0 1-2.07 2.06h-25a2.07 2.07 0 0 1-2.07-2.06V15.16a2.07 2.07 0 0 1 2.07-2.06h25a2.07 2.07 0 0 1 2.07 2.06v7.12a1 1 0 0 0 2 0v-7.12a4.07 4.07 0 0 0-4.07-4.06h-25a4.07 4.07 0 0 0-4.07 4.06v33.68a4.07 4.07 0 0 0 4.07 4.06h25a4.07 4.07 0 0 0 4.07-4.06v-7.31a1 1 0 0 0-1-1Z" />
        </SvgWrapper>
    );
}
export default SvgExitMd;
