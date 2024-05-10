import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgDoc(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M22 11.3h-4.08V8.44a1 1 0 0 0-.29-.71l-6.44-6.44a1 1 0 0 0-.71-.29H2a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h14.92a1 1 0 0 0 1-1v-2.64H22a1 1 0 0 0 1-1V12.3a1 1 0 0 0-1-1ZM11.48 4.41l3 3h-3ZM15.92 21H3V3h6.48v5.44a1 1 0 0 0 1 1h5.44v1.86H8.29a1 1 0 0 0-1 1v6.06a1 1 0 0 0 1 1h7.63Zm-3.17-5.67a1.81 1.81 0 0 1-2 1.94H9.69a.21.21 0 0 1-.23-.27v-3.38a.2.2 0 0 1 .23-.22h1.09a1.8 1.8 0 0 1 1.97 1.93Zm2.45 2a2 2 0 0 1-2-2 2 2 0 0 1 4 0 2 2 0 0 1-2 2Zm5.8-.48a2.14 2.14 0 0 1-1.37.48 2 2 0 1 1 0-4 2.13 2.13 0 0 1 1.26.39.2.2 0 0 1 0 .31l-.09.16c-.08.13-.18.14-.31.06a1.63 1.63 0 0 0-.88-.28 1.25 1.25 0 0 0-1.29 1.33 1.29 1.29 0 0 0 1.3 1.39 1.65 1.65 0 0 0 .95-.34c.12-.09.23-.09.31 0l.11.14a.22.22 0 0 1 .01.36Z" />
            <path d="M10.16 14v2.66h.58A1.2 1.2 0 0 0 12 15.33 1.2 1.2 0 0 0 10.74 14ZM15.2 14a1.27 1.27 0 0 0-1.27 1.33 1.28 1.28 0 1 0 2.55 0A1.28 1.28 0 0 0 15.2 14Z" />
        </SvgWrapper>
    );
}
export default SvgDoc;
