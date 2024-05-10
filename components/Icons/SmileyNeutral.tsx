import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgSmileyNeutral(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M12 .7A11.3 11.3 0 1 0 23.3 12 11.31 11.31 0 0 0 12 .7Zm0 21.6A10.3 10.3 0 1 1 22.3 12 10.31 10.31 0 0 1 12 22.3Z" />
            <path d="M17 14.24H7.06a.5.5 0 0 0-.5.5.5.5 0 0 0 .5.5h9.88a.5.5 0 0 0 0-1ZM8.8 10.07c.41 0 .74-.65.74-1.45s-.33-1.46-.74-1.46-.75.65-.75 1.46.34 1.45.75 1.45ZM15.2 10.07c.41 0 .75-.65.75-1.45s-.34-1.46-.75-1.46-.74.65-.74 1.46.33 1.45.74 1.45Z" />
        </SvgWrapper>
    );
}
export default SvgSmileyNeutral;
