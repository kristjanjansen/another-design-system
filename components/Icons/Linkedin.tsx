import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgLinkedin(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M6 3.56a2.35 2.35 0 0 1-.75 1.83 2.83 2.83 0 0 1-2 .74 2.71 2.71 0 0 1-2-.74 2.46 2.46 0 0 1-.76-1.83 2.41 2.41 0 0 1 .77-1.83 2.82 2.82 0 0 1 2-.73 2.71 2.71 0 0 1 2 .73A2.44 2.44 0 0 1 6 3.56Zm-.28 4.59V23H.77V8.15Zm17.79 6.34V23h-4.93v-7.94a4.32 4.32 0 0 0-.58-2.47 2.12 2.12 0 0 0-1.89-.89 2.43 2.43 0 0 0-1.59.52 3.19 3.19 0 0 0-1 1.28 3.61 3.61 0 0 0-.16 1.21V23H8.45V8.15h4.93v2.16a6.52 6.52 0 0 1 .62-.84 6.77 6.77 0 0 1 .85-.78A3.78 3.78 0 0 1 16.11 8a5.81 5.81 0 0 1 1.72-.24A5.33 5.33 0 0 1 22 9.5a7.16 7.16 0 0 1 1.51 4.99Z" />
        </SvgWrapper>
    );
}
export default SvgLinkedin;
