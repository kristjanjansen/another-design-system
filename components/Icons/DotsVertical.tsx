import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgDotsVertical(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                d="M12 17.75a2.88 2.88 0 1 1-2.88 2.87A2.88 2.88 0 0 1 12 17.75Zm0-8.63A2.88 2.88 0 1 1 9.12 12 2.88 2.88 0 0 1 12 9.12ZM12 .5a2.88 2.88 0 1 1-2.88 2.88A2.88 2.88 0 0 1 12 .5Z"
                style={{
                    fillRule: 'evenodd',
                }}
            />
        </SvgWrapper>
    );
}
export default SvgDotsVertical;
