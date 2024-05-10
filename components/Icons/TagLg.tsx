import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgTagLg(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M110.59 55.66V10.8a1.5 1.5 0 0 0-1.5-1.5H64.23a1.5 1.5 0 0 0-1.06.44L8.48 64.43a1.5 1.5 0 0 0 0 2.12l44.86 44.86a1.5 1.5 0 0 0 2.12 0l54.69-54.69a1.5 1.5 0 0 0 .44-1.06Zm-3-.62L54.4 108.23 11.66 65.49 64.85 12.3h42.74Z" />
            <path d="M86.08 33.81a6.84 6.84 0 0 0 9.68-9.68 6.84 6.84 0 0 0-9.68 9.68Zm2.12-7.55a3.84 3.84 0 1 1 0 5.43 3.86 3.86 0 0 1 0-5.43ZM118.46 15.09a1.5 1.5 0 0 0-1.5 1.5v42.78l-56.77 56.77a1.5 1.5 0 0 0 1.06 2.56 1.51 1.51 0 0 0 1.06-.44l57.21-57.21A1.5 1.5 0 0 0 120 60V16.59a1.5 1.5 0 0 0-1.54-1.5Z" />
        </SvgWrapper>
    );
}
export default SvgTagLg;
