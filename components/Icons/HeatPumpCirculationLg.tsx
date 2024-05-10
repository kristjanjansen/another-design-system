import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgHeatPumpCirculationLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M68.34 91.92A19 19 0 0 1 45 73.41a19 19 0 0 1 4.2-11.9l2.42 1.71a.52.52 0 0 0 .29.09.54.54 0 0 0 .25-.06.5.5 0 0 0 .25-.48l-.68-7.09a.47.47 0 0 0-.21-.36.49.49 0 0 0-.42-.07l-6.73 1.86a.5.5 0 0 0-.16.89l2.54 1.79A22 22 0 0 0 64 95.42a22.28 22.28 0 0 0 5-.58 1.5 1.5 0 0 0-.68-2.92ZM64 51.4a20.9 20.9 0 0 0-5.06.58 1.5 1.5 0 1 0 .68 2.92 19.46 19.46 0 0 1 4.38-.5 19 19 0 0 1 14.71 31l-2.36-1.66a.5.5 0 0 0-.54 0 .5.5 0 0 0-.24.48l.68 7.08a.47.47 0 0 0 .21.36.49.49 0 0 0 .28.09.34.34 0 0 0 .14 0l6.73-1.86a.53.53 0 0 0 .36-.4.5.5 0 0 0-.21-.49l-2.6-1.83A22 22 0 0 0 64 51.4ZM28.28 59.57a1.5 1.5 0 0 0-1.5 1.5v31.35h-12a1.5 1.5 0 0 0 0 3h13.5a1.5 1.5 0 0 0 1.5-1.5V61.07a1.5 1.5 0 0 0-1.5-1.5ZM113.25 92.42h-12V61.07a1.5 1.5 0 1 0-3 0v32.85a1.5 1.5 0 0 0 1.5 1.5h13.53a1.5 1.5 0 0 0 0-3Z" />
            <path d="m20.77 58.62 43.49-41.56 43 41.55a1.5 1.5 0 0 0 2.12 0 1.5 1.5 0 0 0 0-2.12l-18.5-17.86a1.52 1.52 0 0 0 .23-.79V17.39a1.5 1.5 0 0 0-1.5-1.5H77.34a1.5 1.5 0 0 0-1.5 1.5v6.69L65.31 13.9a1.51 1.51 0 0 0-2.08 0L18.7 56.45a1.5 1.5 0 1 0 2.07 2.17Zm58.07-39.73h9.27v17L78.84 27Z" />
        </SvgWrapper>
    );
}
export default SvgHeatPumpCirculationLg;
