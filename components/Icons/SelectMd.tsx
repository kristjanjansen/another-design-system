import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgSelectMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="M45.79 60.15H29.91c-1.05 0-3-.4-4-3.13l-2.61-9.09a20.68 20.68 0 0 1-.62-2.52 4 4 0 0 1 1-3.1 4.66 4.66 0 0 1 3.47-1.43h1.07v-11.3a3.66 3.66 0 1 1 7.32 0v7.54h10.88a3.32 3.32 0 0 1 3.49 3.3V56a4.13 4.13 0 0 1-4.12 4.15Zm-18.7-17.27a2.63 2.63 0 0 0-2 .77 2 2 0 0 0-.47 1.56 17.48 17.48 0 0 0 .55 2.15l2.58 9c.7 1.77 1.78 1.77 2.14 1.77h15.9A2.13 2.13 0 0 0 47.92 56V40.42a1.34 1.34 0 0 0-1.49-1.3h-1.32v2.52a1 1 0 0 1-2 0v-2.52H40.3v2.52a1 1 0 0 1-2 0v-2.52h-2.82v2.52a1 1 0 0 1-2 0V29.58a1.66 1.66 0 1 0-3.32 0v17.27a1 1 0 0 1-2 0v-4Zm15.24-8.83h-4.45a1 1 0 0 1 0-2h3.45V5.85H22.67v26.2h3.09a1 1 0 1 1 0 2h-4.09a1 1 0 0 1-1-1V4.85a1 1 0 0 1 1-1h20.66a1 1 0 0 1 1 1v28.2a1 1 0 0 1-1 1ZM62 30.8H46a1 1 0 0 1-1-1V8.1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v21.7a1 1 0 0 1-1 1Zm-15-2h14V9.1H47Zm-29 2H2a1 1 0 0 1-1-1V8.1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v21.7a1 1 0 0 1-1 1Zm-15-2h14V9.1H3Z" />
        </SvgWrapper>
    );
}
export default SvgSelectMd;
