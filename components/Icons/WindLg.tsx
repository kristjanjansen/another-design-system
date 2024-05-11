import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgWindLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M92.16 76.54H12.54a1.5 1.5 0 0 0 0 3h79.62a12.06 12.06 0 1 1-12 12.06 1.5 1.5 0 0 0-3 0 15.06 15.06 0 1 0 15-15.06ZM96.09 23.75a20.89 20.89 0 0 0-20.86 20.87 1.5 1.5 0 0 0 3 0 17.87 17.87 0 1 1 17.86 17.86H12.54a1.5 1.5 0 1 0 0 3h83.55a20.87 20.87 0 1 0 0-41.73Z" />
            <path d="M12.54 51.46h42A15.06 15.06 0 1 0 39.48 36.4a1.5 1.5 0 0 0 3 0 12.06 12.06 0 1 1 12.06 12.06h-42a1.5 1.5 0 0 0 0 3Z" />
        </SvgWrapper>
    );
}
export default SvgWindLg;
