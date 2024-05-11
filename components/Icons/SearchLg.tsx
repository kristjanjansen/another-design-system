import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgSearchLg(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M118.13 127.5a9.6 9.6 0 0 1-6.81-2.81L72.08 85.45a46.42 46.42 0 1 1 13.5-13.72l39.36 39.35a9.62 9.62 0 0 1-6.81 16.42ZM74.56 83.68l38.88 38.89a6.65 6.65 0 0 0 9.38 0 6.68 6.68 0 0 0 0-9.37l-39-39a46.18 46.18 0 0 1-9.26 9.48ZM46.57 3.5a43.31 43.31 0 1 0 43.31 43.31A43.36 43.36 0 0 0 46.57 3.5ZM20.42 58.84A1.49 1.49 0 0 1 19 57.9a29.72 29.72 0 0 1 16.48-38.63 1.5 1.5 0 0 1 1.12 2.78 26.72 26.72 0 0 0-14.79 34.73 1.49 1.49 0 0 1-.81 1.95 1.36 1.36 0 0 1-.58.11Z" />
        </SvgWrapper>
    );
}
export default SvgSearchLg;
