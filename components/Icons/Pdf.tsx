import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgPdf(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M10.54 14v1.36h.69a.63.63 0 0 0 .67-.69.62.62 0 0 0-.66-.67Z" />
            <path d="M22 11.31h-4.08V8.44a1 1 0 0 0-.3-.71l-6.43-6.44a1 1 0 0 0-.71-.29H2a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h14.92a1 1 0 0 0 1-1v-2.64H22a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1.05Zm-10.52-6.9 3 3h-3ZM15.92 21H3V3h6.48v5.44a1 1 0 0 0 1 1h5.44v1.87H8.3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.62Zm-3.29-6.37A1.24 1.24 0 0 1 11.36 16h-.82v1.14c0 .16-.07.24-.23.24h-.26a.21.21 0 0 1-.23-.24v-3.57a.21.21 0 0 1 .23-.24h1.31a1.22 1.22 0 0 1 1.27 1.3Zm2.37 2.7h-1.12a.21.21 0 0 1-.23-.24v-3.52a.21.21 0 0 1 .23-.24H15a1.86 1.86 0 0 1 2 2 1.87 1.87 0 0 1-2 2Zm5.46-3.6a.21.21 0 0 1-.23.23H18.9v1.13H20a.21.21 0 0 1 .24.23v.16a.21.21 0 0 1-.24.23h-1.1v1.38a.21.21 0 0 1-.23.24h-.26a.21.21 0 0 1-.23-.24v-3.52a.21.21 0 0 1 .23-.24h1.83a.21.21 0 0 1 .23.24Z" />
            <path d="M15 14h-.6v2.75h.6a1.24 1.24 0 0 0 1.33-1.39A1.23 1.23 0 0 0 15 14Z" />
        </SvgWrapper>
    );
}
export default SvgPdf;
