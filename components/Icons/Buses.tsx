import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgBuses(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M117.21 6.8a4 4 0 0 1 4 4v106.41a4 4 0 0 1-4 4H10.79a4 4 0 0 1-4-4V10.79a4 4 0 0 1 4-4h106.42m0-4H10.79a8 8 0 0 0-8 8v106.42a8 8 0 0 0 8 8h106.42a8 8 0 0 0 8-8V10.79a8 8 0 0 0-8-8Z" />
            <path d="M93.34 46.55v-8.48a2.91 2.91 0 0 0-1.9-2.72c-4.54-1.7-16.52-5.74-27.35-5.74s-22.94 4-27.53 5.74a2.91 2.91 0 0 0-1.9 2.73v8.47A2.46 2.46 0 0 0 32.2 49v7.54A2.47 2.47 0 0 0 34.66 59v29.3a2.91 2.91 0 0 0 2.92 2.91h3.18v4.37a2.81 2.81 0 0 0 2.81 2.81h1.56a2.8 2.8 0 0 0 2.8-2.81v-4.37h32.14v4.37a2.8 2.8 0 0 0 2.8 2.81h1.56a2.81 2.81 0 0 0 2.81-2.81v-4.37h3.18a2.91 2.91 0 0 0 2.92-2.91V59a2.47 2.47 0 0 0 2.46-2.47V49a2.46 2.46 0 0 0-2.46-2.45Zm-40.62-9.46h22.56a2.36 2.36 0 1 1 0 4.71H52.72a2.36 2.36 0 1 1 0-4.71ZM44.35 85.7a3.59 3.59 0 1 1 3.58-3.58 3.58 3.58 0 0 1-3.58 3.58Zm39.3 0a3.59 3.59 0 1 1 3.59-3.58 3.58 3.58 0 0 1-3.59 3.58Zm3.59-16.23a2.35 2.35 0 0 1-2.35 2.36H43.11a2.35 2.35 0 0 1-2.35-2.36V48.91a2.36 2.36 0 0 1 2.35-2.36h41.78a2.36 2.36 0 0 1 2.35 2.36Z" />
        </SvgWrapper>
    );
}
export default SvgBuses;
