import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgPortfolioMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="M56.23 13H45.09l-1.84-6.3a.3.3 0 0 0 0-.1 3.35 3.35 0 0 0-3.12-2.11H23.91a3.35 3.35 0 0 0-3.12 2.11.3.3 0 0 0 0 .1L18.91 13H7.77A5.75 5.75 0 0 0 2 18.77v35a5.76 5.76 0 0 0 5.75 5.74h48.48A5.76 5.76 0 0 0 62 53.74v-35A5.75 5.75 0 0 0 56.23 13ZM22.66 7.34a1.36 1.36 0 0 1 1.25-.82h16.18a1.36 1.36 0 0 1 1.25.82L43 13H21ZM7.77 15h48.46A3.75 3.75 0 0 1 60 18.77v6.49l-28 11-28-11v-6.49A3.75 3.75 0 0 1 7.77 15Zm18.12 21 5.75 2.25a.92.92 0 0 0 .33.06.88.88 0 0 0 .33-.06L38.11 36v5.69H25.89Zm30.34 21.48H7.77A3.75 3.75 0 0 1 4 53.74V27.41l19.87 7.78v7.47a1 1 0 0 0 1 1h14.24a1 1 0 0 0 1-1v-7.47L60 27.41v26.33a3.75 3.75 0 0 1-3.77 3.74Z" />
        </SvgWrapper>
    );
}
export default SvgPortfolioMd;
