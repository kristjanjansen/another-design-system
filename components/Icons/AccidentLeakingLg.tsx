import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgAccidentLeakingLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M92 82.86a1.5 1.5 0 0 0 1.5-1.5V61.67a4.76 4.76 0 0 1 1.41-3.39 1.5 1.5 0 0 0-2.11-2.13 7.69 7.69 0 0 0-2.3 5.52v19.69a1.5 1.5 0 0 0 1.5 1.5Z" />
            <path d="M117.11 101h-9.76V10.06a1.5 1.5 0 0 0-1.5-1.5h-68.6a1.5 1.5 0 0 0-1.5 1.5v78.67H23.1A9.26 9.26 0 0 0 13.85 98a3 3 0 0 1-3 3 9.25 9.25 0 0 0 0 18.5h106.26a9.25 9.25 0 1 0 0-18.49Zm-81.36 15.44H10.89a6.25 6.25 0 0 1 0-12.5 6 6 0 0 0 6-6 6.26 6.26 0 0 1 6.25-6.26h12.61Zm68.6 0h-65.6V46.7h12.44v5.45a9.27 9.27 0 0 0 9.26 9.26 3 3 0 0 1 2.95 3 9.25 9.25 0 1 0 18.5 0V46.7h22.45ZM54.19 52.15V46.7H78.9v17.66a6.25 6.25 0 0 1-12.5 0 6 6 0 0 0-6-6 6.27 6.27 0 0 1-6.21-6.21Zm50.16-8.45h-65.6V11.56h65.6Zm12.76 72.74h-9.76V104h9.76a6.25 6.25 0 1 1 0 12.49Z" />
            <path d="M73.87 79.94a1.5 1.5 0 0 0-1.28-.74 1.53 1.53 0 0 0-1.3.72l-5.52 9.13a8 8 0 1 0 13.45.08Zm-1.4 18.55a5 5 0 0 1-5-5 5.09 5.09 0 0 1 .86-2.81l4.25-7 4.12 7.07a5 5 0 0 1-4.2 7.78Z" />
        </SvgWrapper>
    );
}
export default SvgAccidentLeakingLg;
