import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgBookLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M105.06 28.93a1 1 0 0 0-.07-.21l-.06-.1a1 1 0 0 0-.1-.17l-.08-.1-.13-.13c-2.38-2-3.76-5.46-3.68-9.29.07-3.6 1.43-6.75 3.63-8.43a1.5 1.5 0 0 0-.91-2.69H34.42a11.54 11.54 0 0 0-11.54 11.48v89.42a11.54 11.54 0 0 0 11.54 11.53h69.2a1.5 1.5 0 0 0 1.5-1.5V29.33a1.12 1.12 0 0 0 0-.32.24.24 0 0 0-.06-.08ZM34.42 10.76h65.82a15.32 15.32 0 0 0-2.34 8 16 16 0 0 0 2.42 9h-65.9a8.54 8.54 0 1 1 0-17.07Zm0 106.48a8.55 8.55 0 0 1-8.54-8.53V27a11.52 11.52 0 0 0 8.54 3.8h67.7v86.41Z" />
            <path d="M34.42 36a1.5 1.5 0 0 0-1.5 1.5v72.66a1.5 1.5 0 0 0 3 0V37.51a1.5 1.5 0 0 0-1.5-1.51ZM84.7 48.51H50.4a1.5 1.5 0 0 0 0 3h34.3a1.5 1.5 0 0 0 0-3ZM84.7 57.5H50.4a1.5 1.5 0 0 0 0 3h34.3a1.5 1.5 0 0 0 0-3Z" />
        </SvgWrapper>
    );
}
export default SvgBookLg;
