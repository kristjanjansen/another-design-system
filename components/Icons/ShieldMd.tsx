import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgShieldMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="M32 63a1.12 1.12 0 0 1-.31 0c-.26-.08-26.37-8.69-26.37-31.47V10.37A1 1 0 0 1 6 9.42l25.69-8.37a.94.94 0 0 1 .62 0L58 9.42a1 1 0 0 1 .69.95v21.11C58.68 54.26 32.57 62.87 32.3 63a1 1 0 0 1-.3 0ZM7.32 11.1v20.38c0 20 21.82 28.45 24.68 29.46 2.85-1 24.68-9.45 24.68-29.46V11.1L32 3.05ZM32 41.15a3.4 3.4 0 0 1-2.41-1l-8.49-8.48a3.43 3.43 0 0 1 0-4.84 3.5 3.5 0 0 1 4.83 0L32 32.89l11.49-11.5a3.5 3.5 0 0 1 4.83 0 3.42 3.42 0 0 1 0 4.83L34.41 40.15a3.4 3.4 0 0 1-2.41 1Zm-8.48-13.32a1.42 1.42 0 0 0-1 .42 1.39 1.39 0 0 0-.41 1 1.37 1.37 0 0 0 .41 1L31 38.73a1.45 1.45 0 0 0 2 0l13.9-13.92a1.43 1.43 0 0 0 .41-1 1.42 1.42 0 0 0-2.42-1L32.7 35a1 1 0 0 1-.7.29 1 1 0 0 1-.7-.29l-6.77-6.77a1.4 1.4 0 0 0-1.01-.4Z" />
        </SvgWrapper>
    );
}
export default SvgShieldMd;
