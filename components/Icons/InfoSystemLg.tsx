import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgInfoSystemLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M64 39.57a2 2 0 0 0-2 2v11.77a2 2 0 0 0 4 0V41.57a2 2 0 0 0-2-2ZM64 35.18a4.82 4.82 0 1 0-4.82-4.82A4.82 4.82 0 0 0 64 35.18Z" />
            <path d="M117.55 26h-29a28.32 28.32 0 0 0-49 0h-29A1.5 1.5 0 0 0 9 27.54v76.61a1.5 1.5 0 0 0 1.5 1.5h41.37v7.44H32.43a1.5 1.5 0 0 0 0 3h61.68a1.5 1.5 0 0 0 0-3H75.73v-7.44h41.82a1.5 1.5 0 0 0 1.5-1.5V27.54a1.5 1.5 0 0 0-1.5-1.54ZM64 14.91a25.35 25.35 0 0 1 6.37 49.88c-1.68.43-2.74 2.54-4.09 5.2A19 19 0 0 1 64 73.77a21.5 21.5 0 0 1-2-3.65c-1.26-2.69-2.26-4.81-3.91-5.21a25.34 25.34 0 0 1 5.87-50ZM38 29a28.33 28.33 0 0 0 19.33 38.81 16.43 16.43 0 0 1 2 3.58c1.39 3 2.6 5.51 4.67 5.51s3.45-2.57 5-5.55c.64-1.26 1.7-3.37 2.16-3.65A28.34 28.34 0 0 0 90 29h26v55.5H12V29Zm34.76 84.05H54.87v-7.44h17.86ZM12 102.65V87.5h104.1v15.15Z" />
            <path d="M67.92 93.58H59a1.5 1.5 0 0 0 0 3h9a1.5 1.5 0 0 0 0-3Z" />
        </SvgWrapper>
    );
}
export default SvgInfoSystemLg;
