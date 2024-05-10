import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgImage(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M22 21H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1ZM3 19h18V5H3Zm16-1.53H5a.5.5 0 0 1-.5-.5V14a.5.5 0 0 1 .14-.35L7.24 11A.51.51 0 0 1 8 11l3.78 3.78 5.7-5.7a.5.5 0 0 1 .71 0l1.23 1.23a.5.5 0 0 1 .14.35V17a.5.5 0 0 1-.56.47Z" />
        </SvgWrapper>
    );
}
export default SvgImage;
