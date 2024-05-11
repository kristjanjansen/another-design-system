import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgWashingMachineLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M113 3.05H15A6 6 0 0 0 9.09 9v110a6 6 0 0 0 5.91 6h98a6 6 0 0 0 5.93-5.94V9A6 6 0 0 0 113 3.05Zm-98 3h98A2.94 2.94 0 0 1 115.91 9v17.4H12.09V9A2.94 2.94 0 0 1 15 6.05ZM113 122H15a2.94 2.94 0 0 1-2.91-3V29.4h103.82V119a2.94 2.94 0 0 1-2.91 3Z" />
            <path d="M63.6 42.33A33.35 33.35 0 1 0 97 75.68a33.39 33.39 0 0 0-33.4-33.35Zm0 3a30.38 30.38 0 0 1 30.14 26.82 2.48 2.48 0 0 0-.31.18 21.21 21.21 0 0 1-12.06 4 17.63 17.63 0 0 1-8-2A20.62 20.62 0 0 0 64 72a24.91 24.91 0 0 0-10.08 2.4 19.2 19.2 0 0 1-7.65 1.94c-6.16 0-12.56-4-12.62-4.09l-.18-.1A30.38 30.38 0 0 1 63.6 45.33Zm0 60.7a30.39 30.39 0 0 1-30.35-30.35v-.19c2.33 1.3 7.62 3.85 13 3.85a22 22 0 0 0 8.79-2.16A21.67 21.67 0 0 1 64 75a17.92 17.92 0 0 1 8.14 2 20.37 20.37 0 0 0 9.19 2.28A24.11 24.11 0 0 0 94 75.62v.06A30.38 30.38 0 0 1 63.6 106ZM104.14 20a3.73 3.73 0 1 0-3.72-3.72 3.73 3.73 0 0 0 3.72 3.72Zm0-5.45a1.73 1.73 0 1 1-1.72 1.73 1.74 1.74 0 0 1 1.72-1.78ZM93.27 20a3.73 3.73 0 1 0-3.72-3.72A3.73 3.73 0 0 0 93.27 20Zm0-5.45a1.73 1.73 0 1 1-1.72 1.73 1.74 1.74 0 0 1 1.72-1.78Z" />
        </SvgWrapper>
    );
}
export default SvgWashingMachineLg;
