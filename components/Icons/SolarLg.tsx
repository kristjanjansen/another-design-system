import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgSolarLg(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M124.8 126.5H35.1c-.8 0-1.5-.6-1.7-1.3L1.5 3.7c-.1-.5 0-1.1.3-1.6s.9-.7 1.4-.7h89.7c.8 0 1.5.6 1.7 1.3l31.9 121.5c.1.5 0 1.1-.3 1.6s-.8.7-1.4.7zm-88.3-3.6h86L91.5 5.1h-86l31 117.8z" />
            <path d="M3.3 126.5c-.5 0-.9-.2-1.3-.5-.7-.7-.7-1.8 0-2.5l25.2-24.8c.7-.7 1.8-.7 2.5 0s.7 1.8 0 2.5L4.6 126c-.3.4-.8.5-1.3.5zM65.1 126.5c-.8 0-1.5-.5-1.7-1.3L31.5 3.7c-.3-1 .3-1.9 1.3-2.2 1-.3 1.9.3 2.2 1.3l31.9 121.5c.3 1-.3 1.9-1.3 2.2h-.5zM94.9 126.5c-.8 0-1.5-.5-1.7-1.3L61.3 3.7c-.3-1 .3-1.9 1.3-2.2 1-.3 1.9.3 2.2 1.3l31.9 121.5c.3 1-.3 1.9-1.3 2.2h-.5z" />
            <path d="M32.4 116c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8c21.7 0 40.1-40.5 40.3-40.9.6-1.2 13.7-30.2 30.7-30.2 1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8c-14.7 0-27.3 27.7-27.5 28-.8 1.9-19.5 43.1-43.5 43.1zM14.4 45c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8C33.7 41.4 50.5 9 53.7 2.5c.4-.9 1.5-1.3 2.4-.8.9.4 1.3 1.5.8 2.4C52.2 13.7 35.3 45 14.4 45z" />
        </SvgWrapper>
    );
}
export default SvgSolarLg;
