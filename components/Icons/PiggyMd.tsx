import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgPiggyMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <circle cx={45.75} cy={31.63} r={1.42} />
            <path d="M62 36.28s-4.42-.2-6-4.28a17.16 17.16 0 0 0-10.56-9.77v-5.41a1 1 0 0 0-.57-.9 1 1 0 0 0-1.06.12l-6.51 5.24H24.68a18 18 0 0 0-18 18v.56a4.11 4.11 0 0 1-2.47-7 1 1 0 0 0 0-1.41 1 1 0 0 0-1.41 0A6.06 6.06 0 0 0 1 35.78a6.13 6.13 0 0 0 5.85 6.11 17.93 17.93 0 0 0 12.93 14.76v2.67a3.68 3.68 0 0 0 7.36 0v-2H37v2a3.69 3.69 0 0 0 7.37 0v-2.67a18 18 0 0 0 11.13-9.07l6.74-1.67a1 1 0 0 0 .76-1v-7.63a1 1 0 0 0-1-1Zm-1 7.88-6.43 1.59a1 1 0 0 0-.66.54 15.94 15.94 0 0 1-10.75 8.61 1 1 0 0 0-.77 1v3.45a1.69 1.69 0 0 1-3.37 0v-3a1 1 0 0 0-1-1H26.14a1 1 0 0 0-1 1v3a1.68 1.68 0 0 1-3.36 0v-3.48a1 1 0 0 0-.77-1A15.91 15.91 0 0 1 8.84 41.66a6.08 6.08 0 0 0 2.62-1.56 1 1 0 1 0-1.41-1.41 4 4 0 0 1-1.38.91v-.3a16 16 0 0 1 16-16h12.95a1 1 0 0 0 .62-.22l5.17-4.15V23a1 1 0 0 0 .72 1 15.23 15.23 0 0 1 10 8.81A8.84 8.84 0 0 0 61 38.17ZM30.37 11.92a5.46 5.46 0 1 0-5.47-5.46 5.47 5.47 0 0 0 5.47 5.46Zm0-8.92a3.46 3.46 0 1 1-3.47 3.46A3.47 3.47 0 0 1 30.37 3Z" />
            <path d="M35.31 24.81h-9.89a1 1 0 0 0 0 2h9.89a1 1 0 0 0 0-2Z" />
        </SvgWrapper>
    );
}
export default SvgPiggyMd;
