import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgMeters(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M20.4.5H3.6a1 1 0 0 0-1 1v21a1 1 0 0 0 1 1h16.8a1 1 0 0 0 1-1v-21a1 1 0 0 0-1-1Zm-1 21H4.6v-19h14.8Z" />
            <path d="M9.08 13.91a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm0 2ZM14.92 13.91a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm0 2ZM7.15 11.05h9.7a1 1 0 0 0 1-1V7.18a1 1 0 0 0-1-1h-9.7a1 1 0 0 0-1 1v2.87a1 1 0 0 0 1 1Zm1-2.87h7.7v.87h-7.7Z" />
        </SvgWrapper>
    );
}
export default SvgMeters;
