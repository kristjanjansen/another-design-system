import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgTree(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M120.17 122.71h-19.61c.54-4.89 3.69-8.66 7.48-8.66a1.5 1.5 0 0 0 0-3c-5.42 0-9.9 5.11-10.5 11.66H90.3C91 111.85 98.82 103 108 103a1.5 1.5 0 0 0 0-3c-10.8 0-20 10.23-20.71 22.71H65.5V93.59a45.67 45.67 0 1 0-3 0v29.12H34.56a14.83 14.83 0 0 0-14.73-13.31 1.5 1.5 0 0 0 0 3 11.82 11.82 0 0 1 11.7 10.31H7.83a1.5 1.5 0 1 0 0 3h112.34a1.5 1.5 0 0 0 0-3ZM21.33 48A42.67 42.67 0 1 1 65.5 90.59V76.91l23.37-15.18a1.5 1.5 0 1 0-1.64-2.51L65.5 73.34V38.42a1.5 1.5 0 0 0-3 0v17.8l-11.42-5.33a1.5 1.5 0 0 0-1.27 2.72l12.69 5.92v31.06A42.71 42.71 0 0 1 21.33 48Z" />
        </SvgWrapper>
    );
}
export default SvgTree;
