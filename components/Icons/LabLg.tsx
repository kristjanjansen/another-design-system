import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgLabLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M51.64 66.67a1.48 1.48 0 0 0 2 .54l10.87-6.27a1.5 1.5 0 0 0-1.5-2.6l-10.82 6.28a1.49 1.49 0 0 0-.55 2.05Z" />
            <path d="M110.75 84.12h-59a1.5 1.5 0 1 0 0 3h42a36.22 36.22 0 0 1-17.61 21.81H41.77a36.2 36.2 0 0 1-2-62.58l9.15 15.83a1.5 1.5 0 0 0 .91.7 1.58 1.58 0 0 0 .38 0 1.5 1.5 0 0 0 .75-.2l10.88-6.28a1.49 1.49 0 0 0 .55-2.05l-25.2-43.64a1.5 1.5 0 0 0-2-.54l-4.07 2.34-5-8.77a1.5 1.5 0 1 0-2.61 1.49l5 8.78-4.22 2.43a1.56 1.56 0 0 0-.7.91 1.51 1.51 0 0 0 .15 1.14l7 12.19 7.56 13.07a39.18 39.18 0 0 0 1.16 67.31l-3.33 12.06a1.51 1.51 0 0 0 .26 1.31 1.49 1.49 0 0 0 1.19.59h42.76a1.5 1.5 0 0 0 1.45-1.9l-3.32-12.05a39.26 39.26 0 0 0 18.39-23.95h13.89a1.5 1.5 0 0 0 0-3ZM27.06 18.29l8.28-4.78 5.41 9.36-8.17 5Zm7 12.16 8.17-5L59.06 54.6l-8.28 4.78-9.05-15.68a1.54 1.54 0 0 0-.08-.19 1.33 1.33 0 0 0-.14-.19ZM39.55 122l2.78-10.09h33.26L78.37 122Z" />
        </SvgWrapper>
    );
}
export default SvgLabLg;
