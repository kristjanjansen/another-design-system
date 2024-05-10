import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgHome(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M22 23.5H2A1.5 1.5 0 0 1 .5 22V10a1.5 1.5 0 0 1 .56-1.17l10-8a1.5 1.5 0 0 1 1.88 0l10 8A1.5 1.5 0 0 1 23.5 10v12a1.5 1.5 0 0 1-1.5 1.5Zm-18.5-3h17v-9.79L12 3.92l-8.5 6.79Z" />
        </SvgWrapper>
    );
}
export default SvgHome;
