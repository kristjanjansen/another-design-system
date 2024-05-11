import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgLog(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M18.55 23H5.45a4 4 0 0 1-4-4V2a1 1 0 0 1 1-1h15.48a1 1 0 0 1 1 1v13.57h1.28a1 1 0 0 1 .56.17A4 4 0 0 1 18.55 23Zm-9.66-2h9.66a2 2 0 0 0 1.32-3.43H9.14A4 4 0 0 1 9.42 19a3.87 3.87 0 0 1-.53 2ZM3.48 3v16a2 2 0 1 0 3.07-1.6 1 1 0 0 1-.4-1.13 1 1 0 0 1 1-.7h9.82V3Zm11.59 3.1a1 1 0 0 0-1-1H6.51a1 1 0 0 0 0 2h7.56a1 1 0 0 0 1-1Zm0 4a1 1 0 0 0-1-1H6.51a1 1 0 0 0 0 2h7.56a1 1 0 0 0 1-1Z" />
        </SvgWrapper>
    );
}
export default SvgLog;
