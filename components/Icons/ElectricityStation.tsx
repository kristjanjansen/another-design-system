import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgElectricityStation(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M124.42 44 64.86 2.77a1.52 1.52 0 0 0-1.71 0L3.58 44a1.51 1.51 0 0 0-.65 1.23V124a1.5 1.5 0 0 0 1.5 1.5h119.14a1.5 1.5 0 0 0 1.5-1.5V45.2a1.51 1.51 0 0 0-.65-1.2Zm-2.35 78.51H5.93V46L64 5.83 122.07 46Z" />
            <path d="M53.54 69.71H22a1.5 1.5 0 0 0 0 3h31.5a1.5 1.5 0 1 0 0-3ZM53.54 107H22a1.5 1.5 0 0 0 0 3h31.5a1.5 1.5 0 1 0 0-3ZM53.54 94.59H22a1.5 1.5 0 1 0 0 3h31.5a1.5 1.5 0 0 0 0-3ZM53.54 82.15H22a1.5 1.5 0 1 0 0 3h31.5a1.5 1.5 0 0 0 0-3ZM70.81 71.21a1.5 1.5 0 0 0 1.5 1.5h31.5a1.5 1.5 0 0 0 0-3h-31.5a1.5 1.5 0 0 0-1.5 1.5ZM103.81 107h-31.5a1.5 1.5 0 0 0 0 3h31.5a1.5 1.5 0 0 0 0-3ZM103.81 94.59h-31.5a1.5 1.5 0 0 0 0 3h31.5a1.5 1.5 0 0 0 0-3ZM103.81 82.15h-31.5a1.5 1.5 0 0 0 0 3h31.5a1.5 1.5 0 0 0 0-3ZM62 29.63a1.5 1.5 0 1 0-2.64-1.42L52.22 41.4a1.5 1.5 0 0 0 0 1.48 1.49 1.49 0 0 0 1.29.73h13.3l-9.42 10.77a1.5 1.5 0 0 0 .15 2.12 1.46 1.46 0 0 0 1 .37 1.48 1.48 0 0 0 1.13-.51L71.24 43.1a1.5 1.5 0 0 0-1.13-2.49h-14Z" />
        </SvgWrapper>
    );
}
export default SvgElectricityStation;
