import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgHeatPumpAirLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M77.7 79.22H39a1.5 1.5 0 0 0 0 3h38.7a5.1 5.1 0 1 1-5.09 5.1 1.5 1.5 0 0 0-3 0 8.1 8.1 0 1 0 8.09-8.1ZM79.62 53.52a10.94 10.94 0 0 0-10.93 10.93 1.5 1.5 0 0 0 3 0 7.93 7.93 0 1 1 7.93 7.93H39a1.5 1.5 0 0 0 0 3h40.62a10.93 10.93 0 0 0 0-21.86Z" />
            <path d="M59.39 65.55H39a1.5 1.5 0 0 0 0 3h20.39a8.1 8.1 0 1 0-8.09-8.1 1.5 1.5 0 0 0 3 0 5.1 5.1 0 1 1 5.09 5.1ZM28.28 59.57a1.5 1.5 0 0 0-1.5 1.5v31.35h-12a1.5 1.5 0 0 0 0 3h13.5a1.5 1.5 0 0 0 1.5-1.5V61.07a1.5 1.5 0 0 0-1.5-1.5ZM113.25 92.42h-12V61.07a1.5 1.5 0 1 0-3 0v32.85a1.5 1.5 0 0 0 1.5 1.5h13.53a1.5 1.5 0 0 0 0-3Z" />
            <path d="m20.77 58.62 43.49-41.56 43 41.55a1.5 1.5 0 0 0 2.12 0 1.5 1.5 0 0 0 0-2.12l-18.5-17.86a1.52 1.52 0 0 0 .23-.79V17.39a1.5 1.5 0 0 0-1.5-1.5H77.34a1.5 1.5 0 0 0-1.5 1.5v6.69L65.31 13.9a1.51 1.51 0 0 0-2.08 0L18.7 56.45a1.5 1.5 0 1 0 2.07 2.17Zm58.07-39.73h9.27v17L78.84 27Z" />
        </SvgWrapper>
    );
}
export default SvgHeatPumpAirLg;
