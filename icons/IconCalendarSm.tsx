import type { SVGProps } from 'react';
const IconCalendarSm = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="currentColor"
        {...props}
    >
        <path d="M6 12a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1M7 15a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z" />
        <path
            fillRule="evenodd"
            d="M7 2a1 1 0 0 1 1 1h8a1 1 0 1 1 2 0h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2a1 1 0 0 1 1-1m9 3a1 1 0 1 0 2 0h2v2H4V5h2a1 1 0 1 0 2 0zM4 9v10h16V9z"
            clipRule="evenodd"
        />
    </svg>
);
export default IconCalendarSm;
