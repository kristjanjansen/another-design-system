import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgSearch(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="m23.06 20.94-6.49-6.49a8.88 8.88 0 1 0-2.12 2.12l6.49 6.49a1.49 1.49 0 0 0 1.06.44 1.51 1.51 0 0 0 1.06-.44 1.49 1.49 0 0 0 0-2.12ZM3.5 9.35a5.85 5.85 0 1 1 5.85 5.85A5.86 5.86 0 0 1 3.5 9.35Z" />
        </SvgWrapper>
    );
}
export default SvgSearch;
