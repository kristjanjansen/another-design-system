import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgNightLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="night-lg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M16.36 7a6.27 6.27 0 0 0-1.75-1.25.49.49 0 0 0-.57.09.52.52 0 0 0-.1.58 5.6 5.6 0 0 1-7.52 7.5.5.5 0 0 0-.67.67A6.71 6.71 0 0 0 7 16.35a6.57 6.57 0 0 0 4.68 1.94A6.6 6.6 0 0 0 16.36 7Zm-.71 8.64a5.62 5.62 0 0 1-7.94 0l-.28-.3a6.62 6.62 0 0 0 7.93-7.91l.3.27a5.63 5.63 0 0 1-.01 7.95Z" />
        </SvgWrapper>
    );
}
export default SvgNightLg;
