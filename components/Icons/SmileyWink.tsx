import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgSmileyWink(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M12 .7A11.3 11.3 0 1 0 23.3 12 11.31 11.31 0 0 0 12 .7Zm0 21.6A10.3 10.3 0 1 1 22.3 12 10.31 10.31 0 0 1 12 22.3Z" />
            <path d="M17.06 13.15a.5.5 0 0 0-.6.37A4.45 4.45 0 0 1 12 16.69a4.4 4.4 0 0 1-4.46-3.18.5.5 0 1 0-1 .23 5.46 5.46 0 0 0 5.43 4 5.46 5.46 0 0 0 5.43-3.93.5.5 0 0 0-.34-.66ZM15.2 10.07c.41 0 .75-.65.75-1.45s-.34-1.46-.75-1.46-.74.65-.74 1.46.33 1.45.74 1.45ZM7.34 9.12h2.91a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5H7.34a.5.5 0 0 0-.5.5.51.51 0 0 0 .5.5Z" />
        </SvgWrapper>
    );
}
export default SvgSmileyWink;
