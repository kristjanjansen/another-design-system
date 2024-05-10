import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgDelivery(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M33.77 93.53A2.75 2.75 0 1 1 31 90.79a2.74 2.74 0 0 1 2.77 2.74Z" />
            <path
                d="M42.08 93.53A11.06 11.06 0 1 1 31 82.48a11.06 11.06 0 0 1 11.08 11.05Z"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
            />
            <path d="M105 93.53a2.75 2.75 0 1 1-2.75-2.74 2.74 2.74 0 0 1 2.75 2.74Z" />
            <path
                d="M113.26 93.53a11.06 11.06 0 1 1-11.06-11 11.06 11.06 0 0 1 11.06 11ZM20 91h-4c-6.43 0-7.69-.35-7.69-5.67V29.08c0-5.32 1.26-5.67 7.69-5.67h62.9c6.44 0 7.7.35 7.7 5.67V91M90.15 90.99H42.08"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
            />
            <path
                d="M91.54 58h23.22a4.71 4.71 0 0 1 4.94 4.41v24.18a4.71 4.71 0 0 1-4.94 4.4"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
            />
            <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="m103.15 41.88 8.73 16.14H86.6V41.88h16.55zM111.13 74.59a1.3 1.3 0 0 0 1.28 1.31h6a1.3 1.3 0 0 0 1.28-1.31v-3a1.3 1.3 0 0 0-1.28-1.31h-5.16a2.13 2.13 0 0 0-2.13 2.13ZM86.6 33.74h13.25c2 0 3.56.56 3.56 1.24l3 5.67c0 .68-1.6 1.23-3.56 1.23H86.6M61.39 45.18 41.34 65.23l-7.83-12.19"
            />
        </SvgWrapper>
    );
}
export default SvgDelivery;
