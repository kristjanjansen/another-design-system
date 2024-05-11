import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgEmail(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M22.5 21.32h-21a1.5 1.5 0 0 1-1.5-1.5V4.18a1.47 1.47 0 0 1 .11-.56 1.65 1.65 0 0 1 .3-.46 1.52 1.52 0 0 1 .46-.3 1.45 1.45 0 0 1 .59-.13h21a1.43 1.43 0 0 1 .58.12 1.51 1.51 0 0 1 .49.33 1.49 1.49 0 0 1 .32.48 1.56 1.56 0 0 1 .11.57v15.59a1.5 1.5 0 0 1-1.46 1.5Zm-19.5-3h18V7.78l-6.86 6.78a3 3 0 0 1-2.14.88 3 3 0 0 1-2.15-.89L3 7.78ZM5.15 5.68 12 12.42l6.86-6.74Z" />
        </SvgWrapper>
    );
}
export default SvgEmail;
