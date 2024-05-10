import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgGiftLg(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 111.04 111.58"
            {...props}
        >
            <path d="M109.54 18.8H89.78c1.26-4.62.84-9.11-1.23-12.58A12.72 12.72 0 0 0 79.89.29c-5.23-1-11.19.67-16.35 4.6a26.73 26.73 0 0 0-8 9.87 26.93 26.93 0 0 0-8-9.87C42.34 1 36.38-.72 31.15.29a12.7 12.7 0 0 0-8.66 5.93c-2.07 3.47-2.49 8-1.23 12.58H1.5A1.5 1.5 0 0 0 0 20.3v26.32a1.5 1.5 0 0 0 1.5 1.5h5.44v62a1.5 1.5 0 0 0 1.5 1.5h94.16a1.5 1.5 0 0 0 1.5-1.5v-62h5.44a1.5 1.5 0 0 0 1.5-1.5V20.3a1.5 1.5 0 0 0-1.5-1.5ZM65.36 7.28c4.42-3.37 9.64-4.88 14-4.05A9.62 9.62 0 0 1 86 7.76c1.76 3 2 6.93.66 11H57.17a23.16 23.16 0 0 1 8.19-11.48Zm-40.3.48a9.66 9.66 0 0 1 6.66-4.53c4.33-.83 9.54.68 14 4.05a23.16 23.16 0 0 1 8.15 11.52H24.4c-1.31-4.11-1.09-8.09.66-11.04ZM3 21.8h38.06v23.32H3Zm6.94 26.32h31.12v60.46H9.94Zm34.12-1.5V21.8H67v86.78H44.06Zm57 62H70v-60.5h31.1Zm6.94-63.5H70V21.8h38Z" />
        </SvgWrapper>
    );
}
export default SvgGiftLg;
