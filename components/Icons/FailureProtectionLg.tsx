import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgFailureProtectionLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M124.25 9.51H44.33a1.5 1.5 0 0 0-1.5 1.5v11.37a1.5 1.5 0 0 0 3 0v-9.87h76.92v103H45.83V106a1.5 1.5 0 0 0-3 0v11a1.5 1.5 0 0 0 1.5 1.5h79.92a1.51 1.51 0 0 0 1.5-1.5V11a1.51 1.51 0 0 0-1.5-1.49Z" />
            <path d="M57.08 99.54a1.5 1.5 0 0 0-1.5 1.5v3.19a1.5 1.5 0 0 0 1.5 1.5h54.41a1.5 1.5 0 0 0 1.5-1.5V23.77a1.5 1.5 0 0 0-1.5-1.5H57.08a1.5 1.5 0 0 0-1.5 1.5v3.4a1.5 1.5 0 0 0 3 0v-1.9H110v77.46H58.58V101a1.5 1.5 0 0 0-1.5-1.46Z" />
            <path d="M58.57 96.39V31.61a1.51 1.51 0 0 0-1-1.4L16.81 14.26a1.49 1.49 0 0 0-1.39.16 1.51 1.51 0 0 0-.66 1.24v96.68a1.51 1.51 0 0 0 .66 1.24 1.46 1.46 0 0 0 1.39.15l40.8-15.94a1.51 1.51 0 0 0 .96-1.4Zm-3-1-37.81 14.75V17.86l37.81 14.77ZM11.66 53.46a1.5 1.5 0 1 0 0-3H3.75A1.5 1.5 0 0 0 2.25 52v24.19a1.5 1.5 0 0 0 1.5 1.5h7.91a1.5 1.5 0 0 0 0-3H5.25V53.46ZM74.28 56.94a1.5 1.5 0 0 0-1.5 1.5v23.1a1.5 1.5 0 0 0 1.5 1.5h20a1.5 1.5 0 0 0 1.5-1.5v-23.1a1.5 1.5 0 0 0-3 0V80h-17V58.44a1.5 1.5 0 0 0-1.5-1.5Z" />
            <path d="M81.53 70.75h5.52a1.5 1.5 0 0 0 1.5-1.5V54.89h2.74a1.5 1.5 0 0 0 1.5-1.5v-6.93a1.5 1.5 0 0 0-1.5-1.5h-14a1.5 1.5 0 0 0-1.5 1.5v6.93a1.5 1.5 0 0 0 1.5 1.5H80v14.36a1.5 1.5 0 0 0 1.53 1.5Zm-2.74-18.86V48h11v3.93h-2.74a1.5 1.5 0 0 0-1.5 1.5v14.32H83V53.39a1.5 1.5 0 0 0-1.5-1.5Z" />
        </SvgWrapper>
    );
}
export default SvgFailureProtectionLg;
