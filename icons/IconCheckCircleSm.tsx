import type { SVGProps } from 'react';
const IconCheckCircleSm = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="currentColor"
        {...props}
    >
        <path d="M8.914 11.586A1 1 0 0 0 7.5 13l2.793 2.707a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0-1.414-1.414L11 13.586z" />
        <path
            fillRule="evenodd"
            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16"
            clipRule="evenodd"
        />
    </svg>
);
export default IconCheckCircleSm;
