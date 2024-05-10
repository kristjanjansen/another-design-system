import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgGoalLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M123.81 116.93 96.45 69.55a1.49 1.49 0 0 0-2.59 0l-8.74 15.13-19.41-33.63V37.78c6.27 1 9.68.09 17.26-3.07a23.2 23.2 0 0 1 14.68-.77 1.51 1.51 0 0 0 1.35-.21 1.49 1.49 0 0 0 .62-1.21V12a1.46 1.46 0 0 0-.26-.84c-2.66-3.95-12.56-2.4-20.52 1.03s-13.77.92-14 .82a1.49 1.49 0 0 0-2.12 1.36v36.68L43.09 85l-9-15.48a1.49 1.49 0 0 0-2.59 0L4.19 116.93a1.49 1.49 0 0 0 0 1.5 1.48 1.48 0 0 0 1.3.75h117a1.48 1.48 0 0 0 1.3-.75 1.49 1.49 0 0 0 .02-1.5ZM65.71 16.42A22.57 22.57 0 0 0 80 14.94c8.54-3.68 15-3.52 16.59-2.4V30.6a25.85 25.85 0 0 0-14.8 1.34c-7.25 3-10.08 3.8-16.11 2.8ZM32.84 73.3 41.35 88 25.1 116.18h-17Zm35 42.88H28.56l35.65-61.73 35.64 61.73Zm35.52 0-16.51-28.5 8.31-14.38 24.76 42.88Z" />
        </SvgWrapper>
    );
}
export default SvgGoalLg;
