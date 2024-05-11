import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgDotsHorizontal(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                d="M6.25 12a2.88 2.88 0 1 1-2.87-2.88A2.88 2.88 0 0 1 6.25 12Zm8.63 0A2.88 2.88 0 1 1 12 9.12 2.88 2.88 0 0 1 14.88 12Zm8.62 0a2.88 2.88 0 1 1-2.88-2.88A2.88 2.88 0 0 1 23.5 12Z"
                style={{
                    fillRule: 'evenodd',
                }}
            />
        </SvgWrapper>
    );
}
export default SvgDotsHorizontal;
