import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgFileBroken(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="m20.16 7.54-6.43-6.43a1 1 0 0 0-.73-.3H4.54a1 1 0 0 0-1 1v18a1 1 0 0 0 .33.74l2.63 2.4a1.06 1.06 0 0 0 .67.26h.21a1 1 0 0 0 .7-.57l2-4.37L12 22.33a1 1 0 0 0 1.49.38L15.88 21 19 22.69a1 1 0 0 0 1.48-.88V8.25a1 1 0 0 0-.32-.71ZM14 4.23l3 3h-3ZM16.28 19a1 1 0 0 0-1.07.06l-1.9 1.38-2.36-5a1 1 0 0 0-.91-.57 1 1 0 0 0-.9.58l-2.31 5.07-1.29-1.17V2.81H12v5.44a1 1 0 0 0 1 1h5.44v10.88Z" />
        </SvgWrapper>
    );
}
export default SvgFileBroken;
