import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgShoppingCartLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="m107.63 85.54 16.93-46.47a1.49 1.49 0 0 0-.18-1.37 1.5 1.5 0 0 0-1.23-.64H32.67L25.45 7.32A1.51 1.51 0 0 0 24 6.18H4.85a1.5 1.5 0 1 0 0 3h18l21.81 89.94a11.52 11.52 0 1 0 10.26 2.71h33.71a11.48 11.48 0 1 0 7.72-3H47.68l-3-12.31h61.53a1.49 1.49 0 0 0 1.42-.98Zm-11.28 16.29a8.5 8.5 0 1 1-8.5 8.5 8.51 8.51 0 0 1 8.5-8.5Zm-49.15 0a8.5 8.5 0 1 1-8.5 8.5 8.51 8.51 0 0 1 8.5-8.5ZM44 83.52 33.4 40.06H121l-15.83 43.46Z" />
        </SvgWrapper>
    );
}
export default SvgShoppingCartLg;
