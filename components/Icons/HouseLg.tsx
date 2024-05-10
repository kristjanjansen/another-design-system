import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgHouseLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="m124.57 63.39-15.39-33.87a1.5 1.5 0 0 0-1.36-.88H97.57V17.15a1.51 1.51 0 0 0-1.5-1.5H82.32a1.5 1.5 0 0 0-1.5 1.5v11.49H20.18a1.5 1.5 0 0 0-1.36.88L3.43 63.39a1.51 1.51 0 0 0 .11 1.44 1.48 1.48 0 0 0 1.26.68h7.32v45.34a1.5 1.5 0 0 0 1.5 1.5h100.76a1.5 1.5 0 0 0 1.5-1.5V65.51h7.32a1.48 1.48 0 0 0 1.26-.68 1.51 1.51 0 0 0 .11-1.44ZM83.82 18.65h10.75v26.28H83.82Zm-11 90.7H55.14v-32.3h17.72Zm40 0h-37v-33.8a1.5 1.5 0 0 0-1.5-1.5H53.64a1.5 1.5 0 0 0-1.5 1.5v33.8h-37V65.51h97.76Zm1.5-46.84H7.13l14-30.87h59.69v14.79a1.5 1.5 0 0 0 1.5 1.5h13.75a1.51 1.51 0 0 0 1.5-1.5V31.64h9.28l14 30.87Z" />
            <path d="M68.73 98.35a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-3 0v5a1.5 1.5 0 0 0 1.5 1.5ZM23.27 97.78H44a1.5 1.5 0 0 0 1.5-1.5V75.55a1.5 1.5 0 0 0-1.5-1.5H23.27a1.5 1.5 0 0 0-1.5 1.5v20.73a1.5 1.5 0 0 0 1.5 1.5Zm11.86-20.73h7.37v7.37h-7.37Zm0 10.37h7.37v7.36h-7.37ZM24.77 77.05h7.36v7.37h-7.36Zm0 10.37h7.36v7.36h-7.36ZM84.19 97.78h20.73a1.5 1.5 0 0 0 1.5-1.5V75.55a1.5 1.5 0 0 0-1.5-1.5H84.19a1.5 1.5 0 0 0-1.5 1.5v20.73a1.5 1.5 0 0 0 1.5 1.5Zm11.86-20.73h7.37v7.37h-7.37Zm0 10.37h7.37v7.36h-7.37ZM85.69 77.05h7.36v7.37h-7.36Zm0 10.37h7.36v7.36h-7.36Z" />
        </SvgWrapper>
    );
}
export default SvgHouseLg;
