import type { SVGProps } from 'react';
const IconChevronDownSm = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="currentColor"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M8.293 9.793a1 1 0 0 1 1.414 0L12 12.086l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414"
            clipRule="evenodd"
        />
    </svg>
);
export default IconChevronDownSm;
