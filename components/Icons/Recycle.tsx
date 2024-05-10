import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgRecycle(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="m3 43 7.72 6-7.31 13.93C-.23 69.35 6 75.61 10 77.79s10 2.39 15.68 2.32L35.89 63.4l7.72 4.17-13.4-24.83Zm1.09 34.06 16.58 30.64c3.33 4.3 9.62 5.3 16.13 5.1h17.49v-29l-33.17-.23c-5.12.3-11.88-.79-17.03-6.51ZM108.41 20.6l-9 3.83-8.67-13.11C86.88 5 78.39 7.46 74.55 9.88s-6.94 7.58-9.63 12.59l9.66 17-7.4 4.73 28.22.32ZM78.05 5.07l-34.83-.35c-5.34.85-9.27 5.86-12.29 11.63l-8.48 15.3 25.38 14.06 16.28-28.89c2.22-4.65 6.44-10.02 13.94-11.75Zm1.52 118.21 1-9.75 15.66-1.21c7.37-.32 9.37-8.93 9.11-13.46s-3.25-9.75-6.34-14.52l-19.59.18-.55-8.76-14 24.53Zm28.3-19L125.06 74c1.85-5.08-.63-10.95-4.21-16.39l-9.27-14.83L87 58.11l17.37 28.25c2.98 4.2 5.63 10.49 3.5 17.89Z" />
        </SvgWrapper>
    );
}
export default SvgRecycle;
