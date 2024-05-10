import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgNewsLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M121 26h-10.53v-8.25a1.5 1.5 0 0 0-1.5-1.5H99V6.06a1.5 1.5 0 0 0-1.5-1.5H7a1.5 1.5 0 0 0-1.5 1.5v115.88a1.5 1.5 0 0 0 1.5 1.5h102.25a13.29 13.29 0 0 0 13.28-13.27v-82.7A1.5 1.5 0 0 0 121 26ZM8.47 120.44V7.56H96v102.61a13.22 13.22 0 0 0 4.88 10.27Zm111.06-10.27a10.28 10.28 0 0 1-20.55 0V19.25h8.49v88.33a1.5 1.5 0 1 0 3 0V29h9.06Z" />
            <path d="M86.17 68.34H18.28a1.5 1.5 0 0 0 0 3h67.89a1.5 1.5 0 0 0 0-3ZM86.17 80H18.28a1.5 1.5 0 0 0 0 3h67.89a1.5 1.5 0 0 0 0-3ZM86.17 91.71H18.28a1.5 1.5 0 0 0 0 3h67.89a1.5 1.5 0 0 0 0-3ZM86.17 103.39H18.28a1.5 1.5 0 0 0 0 3h67.89a1.5 1.5 0 0 0 0-3ZM86.17 56.66H65.76a1.5 1.5 0 0 0 0 3h20.41a1.5 1.5 0 0 0 0-3ZM86.17 45H65.76a1.5 1.5 0 0 0 0 3h20.41a1.5 1.5 0 0 0 0-3ZM86.17 33.29H65.76a1.5 1.5 0 0 0 0 3h20.41a1.5 1.5 0 0 0 0-3ZM86.17 21.61H65.76a1.5 1.5 0 0 0 0 3h20.41a1.5 1.5 0 0 0 0-3ZM19.32 60h35.41a1.5 1.5 0 0 0 1.5-1.5V23.11a1.5 1.5 0 0 0-1.5-1.5H19.32a1.5 1.5 0 0 0-1.5 1.5v35.42a1.5 1.5 0 0 0 1.5 1.47Zm1.5-35.42h32.41V57H20.82Z" />
        </SvgWrapper>
    );
}
export default SvgNewsLg;
