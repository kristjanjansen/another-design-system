import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgSolarCarLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M36.94 92.39a7.86 7.86 0 1 0 7.85 7.86 7.87 7.87 0 0 0-7.85-7.86Zm0 12.71a4.86 4.86 0 1 1 4.85-4.85 4.86 4.86 0 0 1-4.85 4.85ZM90.75 92.39a7.86 7.86 0 1 0 7.86 7.86 7.86 7.86 0 0 0-7.86-7.86Zm0 12.71a4.86 4.86 0 1 1 4.86-4.85 4.85 4.85 0 0 1-4.86 4.85Z" />
            <path d="M104.28 84.55a4.43 4.43 0 0 0 3.59-4.34v-3.58a4.43 4.43 0 0 0-4.43-4.43H97l-5.46-12.08a7.05 7.05 0 0 0-6.4-4.12H74.87l-1.53-6.7h26.54a1.52 1.52 0 0 0 1.16-.55 1.47 1.47 0 0 0 .31-1.24l-2.66-13.59a1 1 0 0 0 0-.17l-3.35-17-2.7-13.57A1.51 1.51 0 0 0 91.17 2H36.83a1.51 1.51 0 0 0-1.47 1.21l-2.67 13.54-3.35 17a1.62 1.62 0 0 0 0 .19l-2.65 13.5a1.47 1.47 0 0 0 .31 1.23 1.52 1.52 0 0 0 1.16.55h26.5l-1.51 6.62L43 55.79a7.06 7.06 0 0 0-6.42 4.15L31 72.2h-6.81a4.43 4.43 0 0 0-4.42 4.43v3.58a4.42 4.42 0 0 0 3.85 4.37 8.76 8.76 0 0 0-6.87 8.53v13.94a1.51 1.51 0 0 0 .34 1 17.1 17.1 0 0 0 3.91 3.1V122a4.06 4.06 0 0 0 4 4h9.47a4.05 4.05 0 0 0 4-4v-4.43A126.62 126.62 0 0 0 64 119.82a126.62 126.62 0 0 0 25.41-2.27V122a4.05 4.05 0 0 0 4 4h9.47a4.06 4.06 0 0 0 4-4v-10.85a17.1 17.1 0 0 0 3.94-3.15 1.51 1.51 0 0 0 .34-1V93.11a8.76 8.76 0 0 0-6.88-8.56Zm-.84-9.35a1.43 1.43 0 0 1 1.43 1.43v3.58a1.42 1.42 0 0 1-1.43 1.42h-2.19l-2.9-6.43Zm-46.86-29h-6.22L52 35.63h24l1.61 10.59H56.58ZM35.39 18.56h16.14l-2.14 14.07H32.62Zm19.17 0h18.88l2.14 14.07H52.42ZM71.37 5 73 15.56H55L56.63 5Zm24 27.66H78.61l-2.14-14.1h16.14ZM80.68 46.22l-1.61-10.59H96l2.09 10.59ZM92 15.56H76L74.41 5h15.52ZM38.07 5h15.52L52 15.56H36ZM32 35.63h16.9l-1.58 10.59H29.94Zm25.74 13.59h12.52l1.53 6.69-15.56-.06Zm-18.42 12A4.06 4.06 0 0 1 43 58.79l42.1.17a4.08 4.08 0 0 1 3.68 2.39l10.38 23H28.81Zm-16.55 19v-3.59a1.43 1.43 0 0 1 1.42-1.43h5.48l-2.91 6.43h-2.57a1.42 1.42 0 0 1-1.42-1.42ZM35.59 122a1 1 0 0 1-1 1h-9.51a1 1 0 0 1-1-1v-9.17a56.54 56.54 0 0 0 11.56 4.06Zm68.41 0a1 1 0 0 1-1 1h-9.55a1 1 0 0 1-1-1v-5.11a56.54 56.54 0 0 0 11.55-4.08Zm4.28-15.54c-2 1.85-12.71 10.38-44.25 10.38s-42.32-8.55-44.25-10.37V93.11a5.76 5.76 0 0 1 5.75-5.74h77a5.76 5.76 0 0 1 5.75 5.74Z" />
            <path d="M70.94 97.6H57.06a1.5 1.5 0 0 0 0 3h13.88a1.5 1.5 0 0 0 0-3ZM70.94 104.36H57.06a1.5 1.5 0 0 0 0 3h13.88a1.5 1.5 0 0 0 0-3Z" />
        </SvgWrapper>
    );
}
export default SvgSolarCarLg;