import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgInfoBulletLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M64 1.57A62.43 62.43 0 1 0 126.43 64 62.51 62.51 0 0 0 64 1.57Zm0 121.86A59.43 59.43 0 1 1 123.43 64 59.5 59.5 0 0 1 64 123.43Z" />
            <path d="M64 76.51a2 2 0 0 0 2-2V27.4a2 2 0 0 0-4 0v47.11a2 2 0 0 0 2 2ZM64 85.5a6.35 6.35 0 1 0 6.35 6.35A6.36 6.36 0 0 0 64 85.5Z" />
        </SvgWrapper>
    );
}
export default SvgInfoBulletLg;
