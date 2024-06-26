import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgHouse(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 60"
            xmlSpace="preserve"
            {...props}
        >
            <path d="M14 36.182h14v-10H14v10zm2-2v-3h10v3H16zm10-6v1H16v-1h10zM14 40.182v12h14v-12H14zm6 2v3h-4v-3h4zm-4 5h4v3h-4v-3zm6 3v-3h4v3h-4zm4-5h-4v-3h4v3zM32 36.182h14v-10H32v10zm2-2v-1h10v1H34zm10-6v3H34v-3h10z" />
            <path d="M59 48.182a1 1 0 0 0-1 1v1h-1v-1a1 1 0 1 0-2 0v1h-1V29.978a3.975 3.975 0 0 0 1.626.363 4.01 4.01 0 0 0 3.984-4.322 4.017 4.017 0 0 0-1.522-2.833L32.722 3.345 30 .818 27.343 3.29 1.913 23.186a4.01 4.01 0 0 0-1.522 2.833 4.01 4.01 0 0 0 1.057 3.038 3.968 3.968 0 0 0 4.553.922v20.204H5v-1a1 1 0 1 0-2 0v1H2v-1a1 1 0 1 0-2 0v9a1 1 0 1 0 2 0v-1h1v1a1 1 0 1 0 2 0v-1h1v2h48v-2h1v1a1 1 0 1 0 2 0v-1h1v1a1 1 0 1 0 2 0v-9a1 1 0 0 0-1-1.001zM2.912 27.695a1.977 1.977 0 0 1-.527-1.518 1.975 1.975 0 0 1 .761-1.416L28.64 4.811l1.361-1.265 1.424 1.319 25.43 19.896c.446.349.716.852.761 1.416a1.979 1.979 0 0 1-.527 1.518 1.99 1.99 0 0 1-2.686.223l-.403-.31-24-18.5-23.61 18.2-.001.001-.791.609a1.99 1.99 0 0 1-2.686-.223zM2 55.182v-3h1v3H2zm3 0v-3h1v3H5zm29 2v-15h10v15H34zm18 0h-6v-17H32v17H8V28.591l22-16.959 22 16.959v28.591zm2-2v-3h1v3h-1zm3 0v-3h1v3h-1z" />
        </SvgWrapper>
    );
}
export default SvgHouse;
