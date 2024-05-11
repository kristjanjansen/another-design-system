import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgNotice(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M12 1.78A10.22 10.22 0 1 0 22.22 12 10.21 10.21 0 0 0 12 1.78Zm-1 5a1 1 0 1 1 2 0V13a1 1 0 0 1-2 0Zm1 11.62a1.39 1.39 0 1 1 1.39-1.4A1.39 1.39 0 0 1 12 18.39Z" />
        </SvgWrapper>
    );
}
export default SvgNotice;
