import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgVolt(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path
                d="M107.4 39.17a9.36 9.36 0 0 0-9.49-7.39H83.66l10.51-30L65.7 34.41a9.3 9.3 0 0 0-2.41 6.53 8.13 8.13 0 0 0 3.61 6.47 7.85 7.85 0 0 0 4.52 1.41h14.35L75.88 77.7c-3.07 9.36-6 18.88-9.07 27.94h-.61c-2.77-8.91-5.84-18.88-8.92-27.94L38.57 22.85A9.33 9.33 0 1 0 20.93 29l30.63 86.59c0 .12.09.23.13.35a15.83 15.83 0 0 0 14.46 10.3h.73a15.84 15.84 0 0 0 14.48-10.36l.1-.27 25.5-70.95c.1-.26.19-.52.27-.79a9.27 9.27 0 0 0 .17-4.7Z"
                data-name="Shape 14"
            />
        </SvgWrapper>
    );
}
export default SvgVolt;
