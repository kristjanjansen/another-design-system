import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgSmileyConfused(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M15.85 14.5C12 13 8.2 15.75 8 15.87a.51.51 0 0 0-.11.7.51.51 0 0 0 .41.2.46.46 0 0 0 .29-.1s3.54-2.55 6.85-1.25a.49.49 0 0 0 .65-.28.5.5 0 0 0-.24-.64Z" />
            <path d="M12 .7A11.3 11.3 0 1 0 23.3 12 11.31 11.31 0 0 0 12 .7Zm0 21.6A10.3 10.3 0 1 1 22.3 12 10.31 10.31 0 0 1 12 22.3Z" />
            <path d="M15.2 10.07c.41 0 .75-.65.75-1.45s-.34-1.46-.75-1.46-.74.65-.74 1.46.33 1.45.74 1.45ZM8.8 10.07c.41 0 .74-.65.74-1.45s-.33-1.46-.74-1.46-.75.65-.75 1.46.34 1.45.75 1.45Z" />
        </SvgWrapper>
    );
}
export default SvgSmileyConfused;
