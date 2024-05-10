import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgArrowUp(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M23.06 13.06a1.49 1.49 0 0 1-2.12 0L13.5 5.62V22a1.5 1.5 0 0 1-3 0V5.62l-7.44 7.44a1.5 1.5 0 0 1-2.12-2.12l10-10a1.5 1.5 0 0 1 2.12 0l10 10a1.49 1.49 0 0 1 0 2.12Z" />
        </SvgWrapper>
    );
}
export default SvgArrowUp;
