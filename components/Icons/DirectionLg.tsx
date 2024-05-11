import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgDirectionLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M126.08 64.57a1.56 1.56 0 0 0 0-1.1 1.37 1.37 0 0 0-.33-.49L106 43.22a1.5 1.5 0 1 0-2.13 2.12l17.2 17.16H65.5V6.93l17.16 17.16a1.5 1.5 0 0 0 2.12 0 1.51 1.51 0 0 0 0-2.13L65.06 2.25a1.37 1.37 0 0 0-.49-.33 1.43 1.43 0 0 0-1.1 0 1.37 1.37 0 0 0-.49.33L43.22 22a1.51 1.51 0 0 0 0 2.13 1.5 1.5 0 0 0 2.12 0L62.5 6.93V62.5H6.93l17.16-17.16A1.5 1.5 0 0 0 22 43.22L2.25 62.94a1.37 1.37 0 0 0-.33.49 1.56 1.56 0 0 0 0 1.1 1.37 1.37 0 0 0 .33.49L22 84.78a1.51 1.51 0 0 0 2.13 0 1.5 1.5 0 0 0 0-2.12L6.93 65.5H62.5v55.57l-17.16-17.16a1.51 1.51 0 0 0-2.12 0 1.51 1.51 0 0 0 0 2.13l19.72 19.71a1.37 1.37 0 0 0 .49.33 1.43 1.43 0 0 0 1.1 0 1.37 1.37 0 0 0 .49-.33L84.78 106a1.51 1.51 0 0 0 0-2.13 1.51 1.51 0 0 0-2.12 0l-17.16 17.2V65.5h55.57l-17.16 17.16a1.5 1.5 0 0 0 0 2.12 1.51 1.51 0 0 0 2.13 0l19.71-19.72a1.37 1.37 0 0 0 .33-.49Z" />
        </SvgWrapper>
    );
}
export default SvgDirectionLg;
