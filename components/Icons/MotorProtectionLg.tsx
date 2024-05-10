import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgMotorProtectionLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M33.62 104.83h-12a1.5 1.5 0 0 0 0 3h12a1.5 1.5 0 0 0 0-3ZM104.36 104.83h-12a1.5 1.5 0 0 0 0 3h12a1.5 1.5 0 0 0 0-3ZM118.9 20.17H9.1a1.5 1.5 0 0 0-1.5 1.5v79.92a1.5 1.5 0 0 0 1.5 1.5h109.8a1.5 1.5 0 0 0 1.5-1.5V21.67a1.5 1.5 0 0 0-1.5-1.5Zm-1.5 79.92H10.6V23.17h106.8Z" />
            <path d="M51.16 83.81a58.55 58.55 0 0 0 11.55 9 1.57 1.57 0 0 0 1.46 0 58.55 58.55 0 0 0 11.55-9c7.62-7.64 11.66-16.25 11.68-24.89v-5.34a1.5 1.5 0 0 0-3 0v5.34c0 17-17.19 28.49-21 30.81-3.78-2.32-20.92-13.78-21-30.81V44c13.21-1.28 18.75-5.14 21-7.59 2.15 2.36 7.37 6 19.57 7.44a1.49 1.49 0 0 0 1.66-1.31 1.51 1.51 0 0 0-1.32-1.67c-15.7-1.81-18.48-7.54-18.5-7.6a1.64 1.64 0 0 0-1.46-.88 1.5 1.5 0 0 0-1.37.88c0 .06-3.11 6.42-21.18 7.86a1.51 1.51 0 0 0-1.38 1.5v16.29c.08 8.64 4.12 17.25 11.74 24.89Z" />
            <path d="M54.5 58.44a1.49 1.49 0 0 0-2.12 0 1.51 1.51 0 0 0 0 2.12l10 10a1.5 1.5 0 0 0 2.12 0L92 43.11A1.51 1.51 0 0 0 92 41a1.49 1.49 0 0 0-2.12 0L63.44 67.37Z" />
        </SvgWrapper>
    );
}
export default SvgMotorProtectionLg;
