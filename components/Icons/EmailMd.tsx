import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgEmailMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="M51.28 7.35A11.72 11.72 0 1 0 63 19.07 11.74 11.74 0 0 0 51.28 7.35Zm0 21.44A9.72 9.72 0 1 1 61 19.07a9.73 9.73 0 0 1-9.72 9.72Z" />
            <path d="M51.28 34.08a1 1 0 0 0-1 1v18.17L34.14 37.33 40.57 31a1 1 0 0 0 0-1.41 1 1 0 0 0-1.42 0l-10.66 10.5a2.57 2.57 0 0 1-1.85.77 2.57 2.57 0 0 1-1.85-.77L4.43 20h30.84a1 1 0 0 0 0-2H2a1 1 0 0 0-1 1v36.65a1 1 0 0 0 1 1h49.28a1 1 0 0 0 1-1V35.08a1 1 0 0 0-1-1Zm-24.64 8.78a4.58 4.58 0 0 0 3.26-1.35l2.82-2.77 16.13 15.91H4.43l16.14-15.92 2.81 2.78a4.58 4.58 0 0 0 3.26 1.35ZM3 21.36l16.15 16L3 53.25ZM51.28 22.36a1 1 0 0 0 1-1v-8.07a1 1 0 1 0-2 0v8.07a1 1 0 0 0 1 1ZM51.3 23.54a1.14 1.14 0 1 0 1.14 1.14 1.14 1.14 0 0 0-1.14-1.14Z" />
        </SvgWrapper>
    );
}
export default SvgEmailMd;
