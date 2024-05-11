import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgPlay(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M12 22.3C6.3 22.3 1.7 17.7 1.7 12S6.3 1.7 12 1.7 22.3 6.3 22.3 12 17.7 22.3 12 22.3zm0-19.6c-5.1 0-9.3 4.2-9.3 9.3s4.2 9.3 9.3 9.3 9.3-4.2 9.3-9.3-4.2-9.3-9.3-9.3z" />
            <path d="M9.9 16.2c-.1 0-.2 0-.3-.1-.2-.1-.2-.3-.2-.4V8.3c0-.2.1-.3.2-.4.2-.1.3-.1.5 0l6.6 3.7c.2.1.3.3.3.4s-.1.3-.3.4l-6.6 3.7c-.1.1-.2.1-.2.1z" />
        </SvgWrapper>
    );
}
export default SvgPlay;
