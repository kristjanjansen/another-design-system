import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgProfileMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="M9.43 38.31h15.74a1 1 0 0 0 .75-.34 1 1 0 0 0 .24-.78L25.75 34a1 1 0 0 0-.59-.78L20.26 31v-.7a4.59 4.59 0 0 0 1.54-3.44v-2a4.61 4.61 0 1 0-9.21 0v2a4.63 4.63 0 0 0 1.54 3.44v.7l-4.7 2.16a1 1 0 0 0-.58.78l-.41 3.22a1 1 0 0 0 .24.78 1 1 0 0 0 .75.37Zm1.34-3.53 4.78-2.21a1 1 0 0 0 .58-.9v-1.83a1 1 0 0 0-.43-.84 2.61 2.61 0 0 1-1.11-2.14v-2a2.61 2.61 0 1 1 5.21 0v2A2.61 2.61 0 0 1 18.69 29a1 1 0 0 0-.43.82v1.83a1 1 0 0 0 .6.91l5 2.21.14 1.54H10.57ZM32.14 22.28h20.78a1 1 0 0 0 0-2H32.14a1 1 0 0 0 0 2ZM32.14 28.57h20.78a1 1 0 0 0 0-2H32.14a1 1 0 0 0 0 2ZM32.14 34.86h20.78a1 1 0 0 0 0-2H32.14a1 1 0 0 0 0 2Z" />
            <path d="M62.16 10.7h-60a1 1 0 0 0-1 1V53a1 1 0 0 0 1 1h6.38a1 1 0 0 0 1-1 2.45 2.45 0 1 1 4.89 0 1 1 0 0 0 1 1H22a1 1 0 0 0 1-1 2.45 2.45 0 1 1 4.89 0 1 1 0 0 0 1 1h6.57a1 1 0 0 0 1-1 2.45 2.45 0 1 1 4.9 0 1 1 0 0 0 1 1h6.56a1 1 0 0 0 1-1 2.45 2.45 0 0 1 4.9 0 1 1 0 0 0 1 1h6.34a1 1 0 0 0 1-1V11.7a1 1 0 0 0-1-1Zm-1 41.3h-4.45A4.45 4.45 0 0 0 48 52h-4.8a4.45 4.45 0 0 0-8.67 0h-4.75a4.45 4.45 0 0 0-8.67 0h-4.79a4.45 4.45 0 0 0-8.67 0H3.19V12.7h58Z" />
        </SvgWrapper>
    );
}
export default SvgProfileMd;
