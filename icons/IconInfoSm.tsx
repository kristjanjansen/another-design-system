import type { SVGProps } from 'react';
const IconInfoSm = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="currentColor"
        {...props}
    >
        <path d="M11 12a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0zM12 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        <path
            fillRule="evenodd"
            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16"
            clipRule="evenodd"
        />
    </svg>
);
export default IconInfoSm;
