import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgSolarHome(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M21.25 38.2H47a13 13 0 1 0 0-25.91 12.69 12.69 0 0 0-3.78.57 12.15 12.15 0 0 0-22.82 3.87 10.75 10.75 0 0 0 .85 21.47Zm0-18.51H21.69a1.53 1.53 0 0 0 1.11-.4 1.48 1.48 0 0 0 .48-1.07 9.16 9.16 0 0 1 17.75-3 1.49 1.49 0 0 0 2 .86 9.77 9.77 0 0 1 4-.84A10 10 0 1 1 47 35.2H21.25a7.76 7.76 0 0 1 0-15.51ZM126.79 79.85 78.31 33a1.51 1.51 0 0 0-2.08 0L46.44 61.41l-1.13-4.31a1.49 1.49 0 0 0-1.45-1.1H2.25A1.51 1.51 0 0 0 .8 57.86l13.2 50.4-11.1 10.9a1.5 1.5 0 0 0 1 2.57 1.48 1.48 0 0 0 1-.43l9.87-9.7 2.36 9a1.49 1.49 0 0 0 1.45 1.12h51.01a1.5 1.5 0 0 0 1.5-1.5V96.74h12.35v23.49a1.5 1.5 0 0 0 1.5 1.5h24.77a1.5 1.5 0 0 0 1.5-1.5V76.71a1.5 1.5 0 0 0-3 0v42H86.44V95.24a1.5 1.5 0 0 0-1.5-1.5H69.59a1.5 1.5 0 0 0-1.5 1.5v23.49h-6.68l-14.1-54 30-28.62L124.7 82a1.46 1.46 0 0 0 1 .42 1.48 1.48 0 0 0 1.07-.45 1.5 1.5 0 0 0 .02-2.12Zm-93.07 38.88L18.11 59h10.75l15.61 59.75ZM4.2 59H15l15.61 59.75h-10.8Zm43.37 59.75L32 59h10.7l15.61 59.75Z" />
            <path d="M67.77 66.39a9.5 9.5 0 1 0 9.49-9.49 9.51 9.51 0 0 0-9.49 9.49Zm16 0a6.5 6.5 0 1 1-6.5-6.49 6.51 6.51 0 0 1 6.49 6.49Z" />
        </SvgWrapper>
    );
}
export default SvgSolarHome;