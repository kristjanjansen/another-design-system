import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgFilter(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M14.46 23.5a1.57 1.57 0 0 1-.85-.26l-4.92-3.38A1.49 1.49 0 0 1 8 18.63v-6.87L.84 3A1.5 1.5 0 0 1 2 .5h20A1.5 1.5 0 0 1 23.16 3L16 11.76V22a1.51 1.51 0 0 1-.8 1.33 1.57 1.57 0 0 1-.74.17ZM11 17.84l2 1.31v-7.92a1.51 1.51 0 0 1 .34-1l5.49-6.73H5.17l5.53 6.78a1.51 1.51 0 0 1 .34 1Z" />
        </SvgWrapper>
    );
}
export default SvgFilter;
