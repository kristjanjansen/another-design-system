import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgLocationMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="M38.25 22.2A6.25 6.25 0 1 0 32 28.45a6.25 6.25 0 0 0 6.25-6.25Zm-10.5 0A4.25 4.25 0 1 1 32 26.45a4.25 4.25 0 0 1-4.25-4.25Z" />
            <path d="M32 50.74a1 1 0 0 0 .74-.33C33.4 49.68 49 32.39 49 23.27a17 17 0 0 0-34 0c0 9.12 15.6 26.41 16.26 27.14a1 1 0 0 0 .74.33Zm0-42.47a15 15 0 0 1 15 15c0 7.29-11.88 21.39-15 25-3.12-3.57-15-17.67-15-25a15 15 0 0 1 15-15Z" />
            <path d="M45.88 43.7a1 1 0 1 0-.32 2c8.13 1.3 11.08 3.4 11.08 4.5 0 2.25-9.6 5.53-24.64 5.53S7.36 52.45 7.36 50.2c0-1.1 3-3.22 11.08-4.53a1 1 0 0 0-.32-2c-4.77.77-12.76 2.63-12.76 6.5 0 4.94 13.4 7.53 26.64 7.53s26.64-2.59 26.64-7.53c0-3.84-8-5.71-12.76-6.47Z" />
        </SvgWrapper>
    );
}
export default SvgLocationMd;
