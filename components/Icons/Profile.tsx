import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgProfile(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M22.18 23.5H1.82a1 1 0 0 1-.75-.33 1 1 0 0 1-.25-.78l.54-4.69a1 1 0 0 1 .64-.82l5.28-2.17a1 1 0 0 1 1.3.55 1 1 0 0 1-.58 1.3l-4.73 2-.34 3h18.13l-.34-3-4.9-1.95a1 1 0 0 1 .74-1.86L22 16.88a1 1 0 0 1 .62.82l.54 4.69a1 1 0 0 1-.25.78 1 1 0 0 1-.73.33Zm-10-10.12a5.43 5.43 0 0 1-3.72-1.46 5.51 5.51 0 0 1-1.84-4.06V6a5.52 5.52 0 0 1 6-5.5 5.69 5.69 0 0 1 5 5.73v1.39a5.68 5.68 0 0 1-5 5.73 4.19 4.19 0 0 1-.49.03Zm0-10.88a3.49 3.49 0 0 0-2.37.92A3.54 3.54 0 0 0 8.62 6v1.86a3.52 3.52 0 0 0 3.84 3.5 3.67 3.67 0 0 0 3.2-3.74V6.25a3.68 3.68 0 0 0-3.2-3.74Z" />
        </SvgWrapper>
    );
}
export default SvgProfile;
