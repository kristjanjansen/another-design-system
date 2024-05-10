import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgHomeAlt(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M22 23.4h-6.5c-.8 0-1.5-.7-1.5-1.5v-5.6h-3.9v5.6c0 .8-.7 1.5-1.5 1.5H2c-.8 0-1.5-.7-1.5-1.5V10.1c0-.5.2-.9.6-1.2l10-8c.5-.4 1.3-.4 1.9 0l10 8c.4.3.6.7.6 1.2v11.8c-.1.8-.8 1.5-1.6 1.5zm-5.1-3h3.5v-9.6L12 4l-8.5 6.8v9.6H7v-5.1c0-1.1.9-2 2-2h5.8c1.1 0 2 .9 2 2v5.1z" />
        </SvgWrapper>
    );
}
export default SvgHomeAlt;
