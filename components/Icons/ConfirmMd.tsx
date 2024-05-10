import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgConfirmMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="M47.29 9.75h-6.12V7.64a1 1 0 0 0-1-1h-3A5 5 0 0 0 35 2.19a5.51 5.51 0 0 0-2.83-.83 5.51 5.51 0 0 0-2.83.83 5 5 0 0 0-2.12 4.45h-3a1 1 0 0 0-1 1v2.11H17.1a7.44 7.44 0 0 0-7.42 7.43V46.6A7.44 7.44 0 0 0 17.1 54h30.19a7.44 7.44 0 0 0 7.42-7.43V17.18a7.44 7.44 0 0 0-7.42-7.43ZM25.22 8.64h3a1 1 0 0 0 .71-.3 1 1 0 0 0 .29-.71c0-1.8.06-3 1.2-3.75a3.6 3.6 0 0 1 1.76-.52 3.6 3.6 0 0 1 1.82.52c1.14.72 1.22 2 1.2 3.75a1 1 0 0 0 .29.71 1 1 0 0 0 .71.3h3v5h-14Zm27.49 38A5.43 5.43 0 0 1 47.29 52H17.1a5.43 5.43 0 0 1-5.42-5.43V17.18a5.43 5.43 0 0 1 5.42-5.43h6.12v2.9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2.9h6.12a5.43 5.43 0 0 1 5.42 5.43Z" />
            <path d="M42.33 25.46 30.41 37.38l-4.33-6.74a1 1 0 1 0-1.68 1.09l5 7.78a1 1 0 0 0 .73.45h.11a1 1 0 0 0 .7-.3l12.8-12.79a1 1 0 0 0 0-1.42 1 1 0 0 0-1.41.01Z" />
        </SvgWrapper>
    );
}
export default SvgConfirmMd;
