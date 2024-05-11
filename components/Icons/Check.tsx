import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgCheck(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M12 .81A11.19 11.19 0 1 0 23.19 12 11.2 11.2 0 0 0 12 .81Zm0 21.38A10.19 10.19 0 1 1 22.19 12 10.2 10.2 0 0 1 12 22.19Z" />
            <path d="m17.24 8.44-6.92 6.93-2.54-4a.5.5 0 0 0-.84.54l2.87 4.48a.53.53 0 0 0 .37.23h.05a.49.49 0 0 0 .36-.15L18 9.15a.5.5 0 0 0-.71-.71Z" />
        </SvgWrapper>
    );
}
export default SvgCheck;
