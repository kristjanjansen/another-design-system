import type { SVGProps } from 'react';
const IconChevronLeftSm = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="currentColor"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M13.707 8.293a1 1 0 0 1 0 1.414L11.414 12l2.293 2.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0"
            clipRule="evenodd"
        />
    </svg>
);
export default IconChevronLeftSm;
