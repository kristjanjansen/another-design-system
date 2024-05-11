import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgScreenLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M117.55 19H10.45A1.5 1.5 0 0 0 9 20.47v76.61a1.5 1.5 0 0 0 1.5 1.5h41.37V106H32.43a1.5 1.5 0 0 0 0 3h61.68a1.5 1.5 0 0 0 0-3H75.73v-7.42h41.82a1.5 1.5 0 0 0 1.5-1.5V20.47a1.5 1.5 0 0 0-1.5-1.47Zm-1.5 3v55.43H12V22Zm-43.32 84H54.87v-7.42h17.86ZM12 95.58V80.43h104.1v15.15Z" />
            <path d="M67.92 86.51H59a1.5 1.5 0 0 0 0 3h9a1.5 1.5 0 0 0 0-3Z" />
        </SvgWrapper>
    );
}
export default SvgScreenLg;
