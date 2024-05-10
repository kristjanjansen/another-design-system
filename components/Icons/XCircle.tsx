import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgXCircle(props: IconProps) {
    return (
        <SvgWrapper
            viewBox="0 0 120 120"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect
                x={36.666}
                y={79.421}
                width={60.464}
                height={5.533}
                rx={2.766}
                transform="rotate(-45 36.666 79.421)"
            />
            <rect
                x={40.579}
                y={36.667}
                width={60.464}
                height={5.533}
                rx={2.766}
                transform="rotate(45 40.579 36.667)"
            />
            <path d="M116 60c0 30.928-25.072 56-56 56S4 90.928 4 60 29.072 4 60 4s56 25.072 56 56ZM11.615 60c0 26.722 21.663 48.384 48.385 48.384 26.722 0 48.384-21.662 48.384-48.384S86.722 11.615 60 11.615 11.615 33.278 11.615 60Z" />
        </SvgWrapper>
    );
}
export default SvgXCircle;
