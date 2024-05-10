import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgClock(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M12 23a11 11 0 1 1 11-11 11 11 0 0 1-11 11Zm0-20a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm6.14 9.7a1 1 0 0 0-1-1H12.3V6.86a1 1 0 1 0-2 0v5.84a1 1 0 0 0 1 1h5.84a1 1 0 0 0 1-1Z" />
        </SvgWrapper>
    );
}
export default SvgClock;
