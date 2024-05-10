import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgMoneyMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="M62 48.91H7.08a1 1 0 1 1 0-2H61V21a1 1 0 0 1 2 0v26.9a1 1 0 0 1-1 1.01ZM2 44a1 1 0 0 1-1-1V16.11a1 1 0 0 1 1-1h54.92a1 1 0 0 1 1 1V43a1 1 0 0 1-1 1Zm46.48-2h7.44v-7.43A8.52 8.52 0 0 0 48.48 42Zm-30 0h28a10.51 10.51 0 0 1 9.45-9.45V17.11H43.35L36 24.5a8.24 8.24 0 0 1-11.6 11.56ZM3 42h12.62L23 34.65a8.24 8.24 0 0 1 11.54-11.57l6-6H12.45A10.52 10.52 0 0 1 3 26.55Zm26.46-18.68a6.24 6.24 0 1 0 6.24 6.24 6.25 6.25 0 0 0-6.24-6.24ZM3 17.11v7.43a8.54 8.54 0 0 0 7.44-7.43Z" />
        </SvgWrapper>
    );
}
export default SvgMoneyMd;
