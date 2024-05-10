import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgTrashLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="m75 86.39 3.6-8.61a1.51 1.51 0 0 0-.06-1.28 1.54 1.54 0 0 0-1-.77l-9.2-1.81-4-4.5a1.51 1.51 0 0 0-1.71-.42L53 72.94a1.54 1.54 0 0 0-.8.77l-4.29 9.49a1.47 1.47 0 0 0-.13.62l.08 16.52-5.47 10.73a1.51 1.51 0 0 0 .36 1.82l9.11 7.83a1.54 1.54 0 0 0 1 .36h18.46a1.5 1.5 0 0 0 1.5-1.48l.07-5.48 5.37-5.31a1.5 1.5 0 0 0 .44-1.06V93a1.49 1.49 0 0 0-.21-.77Zm.71 20.73-5.35 5.3a1.55 1.55 0 0 0-.45 1l-.06 4.61H53.4l-7.8-6.7 5.1-10a1.49 1.49 0 0 0 .16-.69l-.08-16.55 3.93-8.64 8.07-3.29 3.6 4.07a1.46 1.46 0 0 0 .84.48l7.89 1.56-3.19 7.62a1.53 1.53 0 0 0 .1 1.35l3.68 6.08ZM49.21 37.47a3 3 0 1 0-3-3 3 3 0 0 0 3 3ZM78.79 37.47a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z" />
            <path d="m124.81 56-19.14-19.16V26.41a1.49 1.49 0 0 0-.88-1.37L86.8 17a1.5 1.5 0 0 0-.62-.13H77.9V8.42a1.5 1.5 0 0 0-1.5-1.5H51.6a1.5 1.5 0 0 0-1.5 1.5v8.43h-8.28a1.47 1.47 0 0 0-.62.13L23.21 25a1.49 1.49 0 0 0-.88 1.37v10.48L3.19 56a1.5 1.5 0 0 0-.3 1.7l19.58 41.45a1.52 1.52 0 0 0 1.36.86h10.5a1.5 1.5 0 0 0 1.45-1.89l-8.66-32.46 16.17-13.31h41.42l16.17 13.31-8.66 32.46a1.5 1.5 0 0 0 1.45 1.88h10.5a1.52 1.52 0 0 0 1.36-.86l19.58-41.43a1.5 1.5 0 0 0-.3-1.71ZM25.33 27.38l16.81-7.53h9.46a1.5 1.5 0 0 0 1.5-1.5V9.92h21.8v8.43a1.5 1.5 0 0 0 1.5 1.5h9.46l16.81 7.53V36H94a1.49 1.49 0 0 0-1.25.69l-8.28 12.7h-40.9l-8.28-12.7A1.49 1.49 0 0 0 34 36h-8.67ZM24.47 64a1.48 1.48 0 0 0-.47 1.5L32.38 97h-7.6L6.05 57.4 24.45 39h8.77l7.54 11.58Zm78.75 33h-7.6L104 65.5a1.48 1.48 0 0 0-.49-1.54L87.24 50.55 94.78 39h8.77L122 57.4Z" />
        </SvgWrapper>
    );
}
export default SvgTrashLg;