import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgWord(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-5.09 13H13.6l-1.38-5.19c-.14-.51-.22-1.13-.22-1.13s-.1.62-.24 1.13L10.34 16H9L7 8h1.15l1.42 5.87c.1.43.15.85.15.85s.06-.41.17-.85L11.47 8h1L14 13.87a6.75 6.75 0 0 1 .17.85 5.46 5.46 0 0 1 .14-.85L15.85 8H17Z" />
        </SvgWrapper>
    );
}
export default SvgWord;
