import type { SVGProps } from 'react';
const IconStackSm = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="currentColor"
        {...props}
    >
        <path d="M8 3a1 1 0 0 0 0 2h8a3 3 0 0 1 3 3v8a1 1 0 1 0 2 0V8a5 5 0 0 0-5-5z" />
        <path
            fillRule="evenodd"
            d="M5 7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 2h10v10H5z"
            clipRule="evenodd"
        />
    </svg>
);
export default IconStackSm;
