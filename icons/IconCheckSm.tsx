import type { SVGProps } from 'react';
const IconCheckSm = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="currentColor"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M6.293 10.293a1 1 0 0 1 1.414 0L11 13.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414"
            clipRule="evenodd"
        />
    </svg>
);
export default IconCheckSm;
