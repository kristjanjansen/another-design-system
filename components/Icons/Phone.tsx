import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgPhone(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M16.65 23a1 1 0 0 1-.38-.07C10.91 20.71 3 12.35 1.08 7.71A1 1 0 0 1 1 7.16a11.67 11.67 0 0 1 3.23-5.84A1 1 0 0 1 5 1a1 1 0 0 1 .72.33c1.71 1.88 4.93 5.76 5.07 5.92a1 1 0 0 1-.1 1.38L9 10.17A23.11 23.11 0 0 0 13.84 15l1.59-1.64a1 1 0 0 1 1.36-.07c.17.14 4.09 3.43 5.89 5.08a1 1 0 0 1 0 1.44A11.48 11.48 0 0 1 16.79 23Z" />
        </SvgWrapper>
    );
}
export default SvgPhone;
