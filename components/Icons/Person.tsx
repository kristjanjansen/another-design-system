import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgPerson(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M22.18 24H1.82a1.5 1.5 0 0 1-1.49-1.67l.53-4.69a1.5 1.5 0 0 1 .92-1.22l5.28-2.17A1.5 1.5 0 0 1 8.2 17l-4.46 1.86L3.5 21h17l-.24-2.13L15.63 17a1.5 1.5 0 1 1 1.11-2.78l5.46 2.17a1.48 1.48 0 0 1 .94 1.22l.53 4.69a1.5 1.5 0 0 1-1.49 1.7Zm-10-10.12a6 6 0 0 1-6-6V6a6 6 0 0 1 6.55-6 6.19 6.19 0 0 1 5.49 6.23v1.39a6.18 6.18 0 0 1-5.49 6.23 4.53 4.53 0 0 1-.58.03ZM12.14 3a3 3 0 0 0-2 .79A3 3 0 0 0 9.12 6v1.86a3 3 0 0 0 3.29 3 3.16 3.16 0 0 0 2.75-3.24V6.25A3.18 3.18 0 0 0 12.41 3Z" />
        </SvgWrapper>
    );
}
export default SvgPerson;
