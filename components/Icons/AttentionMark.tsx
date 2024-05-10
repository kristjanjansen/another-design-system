import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgAttentionMark(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M64 13.17 5.3 114.83h117.4Zm-3.21 39.26a3.24 3.24 0 1 1 6.48 0v30.24a3.24 3.24 0 1 1-6.48 0ZM64 101a4.31 4.31 0 1 1 4.34-4.34v.07A4.31 4.31 0 0 1 64 101Z" />
        </SvgWrapper>
    );
}
export default SvgAttentionMark;
