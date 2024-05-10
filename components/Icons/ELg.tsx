import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgELg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="m97 27 16.4 16.38-49.28 57.67L14.6 43.39 31.63 27Zm-63.17 5.43L22.15 43.62l21.32 25h4.05L47.45 38H43v-5.69ZM50.67 77 64 92.53 77.42 77Zm55.43-33.38L94.42 32.18H81l3.53 13.75H76s-1.6-7.86-5.83-7.91H58.36v10.35h5.23V45h8.14v15.41H64v-3.53h-5.6v11.76h12c.56 0 5.6 1.14 6.3-10.83h8.61L84.19 69Z" />
        </SvgWrapper>
    );
}
export default SvgELg;
