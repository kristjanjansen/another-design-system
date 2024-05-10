import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgComment(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M20.08 1H3.92A2.88 2.88 0 0 0 1 3.88v11.18a2.88 2.88 0 0 0 2.88 2.88h3V22a1 1 0 0 0 .61.92.91.91 0 0 0 .39.08 1 1 0 0 0 .7-.29l4.77-4.77h6.67A2.88 2.88 0 0 0 23 15.06V3.88A2.88 2.88 0 0 0 20.08 1ZM21 15.06a.89.89 0 0 1-.88.88H13a1 1 0 0 0-.71.29l-3.35 3.36v-2.65a1 1 0 0 0-1-1h-4a.89.89 0 0 1-.94-.88V3.88A.89.89 0 0 1 3.92 3h16.16a.89.89 0 0 1 .88.88Z" />
            <path d="M17.88 5.2H6.05a1 1 0 0 0 0 2h11.83a1 1 0 0 0 0-2ZM14.76 9.2H6.05a1 1 0 0 0 0 2h8.71a1 1 0 1 0 0-2Z" />
        </SvgWrapper>
    );
}
export default SvgComment;
