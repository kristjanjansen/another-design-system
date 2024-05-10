import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgPackageFixClick(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
            xmlSpace="preserve"
            {...props}
        >
            <path
                fill="none"
                d="M60 4C29.1 4 4 29.1 4 60s25.1 56 56 56 56-25.1 56-56S90.9 4 60 4zM29 29c.8-.8 1.9-1 3-.7l49.3 16.4c1 .3 1.7 1.1 1.9 2.1.2 1-.1 2-.8 2.7l-8.2 8.2 2.2 2.2h-8.2l16.6 16.6-8.2 8.2-16.8-16.6c-1.1-1.1-3-1.1-4.1 0L48.8 75l-5-15h-6.1l-9.3-28c-.4-1-.1-2.2.6-3zm31 78.6c-26.3 0-47.6-21.3-47.6-47.6h25.3l7.1 21.3c.3 1 1.1 1.7 2.1 1.9 1 .2 2-.1 2.7-.8l8.2-8.2L74.5 91c.6.6 1.3.9 2.1.9s1.5-.3 2.1-.9L91 78.6c1.1-1.1 1.1-3 0-4.1L76.4 60h31.2c0 26.3-21.3 47.6-47.6 47.6z"
            />
            <path
                fill="none"
                d="m68.2 60-.2-.2c-1.1-1.1-1.1-3 0-4.1l6.9-6.9-39.2-13.1L43.8 60h24.4z"
            />
            <path d="M37.7 60h6.1l5 15 6.9-6.9c1.1-1.1 3-1.1 4.1 0l16.7 16.7 8.2-8.2L68.2 60h8.2l-2.2-2.2 8.2-8.2c.7-.7 1-1.7.8-2.7-.2-1-1-1.8-1.9-2.1L32 28.3c-1-.3-2.2-.1-3 .7-.8.8-1 1.9-.7 3l9.4 28zM75 48.8l-6.9 6.9c-1.1 1.1-1.1 3 0 4.1l.2.2H43.8l-8.1-24.3L75 48.8z" />
            <path d="M60 0C26.9 0 0 26.9 0 60s26.9 60 60 60 60-26.9 60-60S93.1 0 60 0zm0 116C29.1 116 4 90.9 4 60S29.1 4 60 4s56 25.1 56 56-25.1 56-56 56z" />
            <path d="M76.4 60 91 74.5c1.1 1.1 1.1 3 0 4.1L78.6 91c-.6.6-1.3.9-2.1.9s-1.5-.3-2.1-.9L57.8 74.2l-8.2 8.2c-.7.7-1.7 1-2.7.8-1-.2-1.8-1-2.1-1.9L37.7 60H12.4c0 26.3 21.3 47.6 47.6 47.6s47.6-21.3 47.6-47.6H76.4z" />
        </SvgWrapper>
    );
}
export default SvgPackageFixClick;
