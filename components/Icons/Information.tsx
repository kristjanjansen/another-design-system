import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgInformation(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 126.11 126.11"
            {...props}
        >
            <circle cx={63.06} cy={93.23} r={6.16} />
            <path d="M63.06 0a63.06 63.06 0 1 0 63.05 63.06A63 63 0 0 0 63.06 0Zm0 116.26a53.21 53.21 0 1 1 53.2-53.2 53.18 53.18 0 0 1-53.2 53.2Z" />
            <path d="M63.06 31.65a19.73 19.73 0 0 0-19.71 19.71 4.93 4.93 0 0 0 9.85 0 9.86 9.86 0 1 1 9.86 9.85 4.92 4.92 0 0 0-4.93 4.92v12.32a4.93 4.93 0 1 0 9.85 0v-8a19.71 19.71 0 0 0-4.92-38.79Z" />
        </SvgWrapper>
    );
}
export default SvgInformation;
