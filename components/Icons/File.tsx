import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgFile(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="m20.16 7.73-6.43-6.44A1 1 0 0 0 13 1H4.54a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h14.91a1 1 0 0 0 1-1V8.44a1 1 0 0 0-.29-.71ZM14 4.41l3 3h-3ZM5.54 21V3H12v5.44a1 1 0 0 0 1 1h5.44V21Z" />
        </SvgWrapper>
    );
}
export default SvgFile;
