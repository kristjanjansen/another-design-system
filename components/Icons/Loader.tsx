import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgLoader(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                d="M12 22.5A10.5 10.5 0 1 1 22.5 12 10.51 10.51 0 0 1 12 22.5Zm0-20a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 12 2.5Z"
                style={{
                    opacity: 0.25,
                }}
            />
            <path d="M22 12.5a.5.5 0 0 1-.5-.5A9.51 9.51 0 0 0 12 2.5a.5.5 0 0 1 0-1A10.51 10.51 0 0 1 22.5 12a.5.5 0 0 1-.5.5Z" />
        </SvgWrapper>
    );
}
export default SvgLoader;
