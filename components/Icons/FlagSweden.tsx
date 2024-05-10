import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgFlagSweden(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            {...props}
        >
            <path
                style={{
                    fill: '#4173cd',
                }}
                d="M473.655 88.275H38.345C17.167 88.275 0 105.442 0 126.62v258.76c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345V126.62c0-21.178-17.167-38.345-38.345-38.345z"
            />
            <path
                style={{
                    fill: '#ffe15a',
                }}
                d="M512 229.516H211.862V88.275h-52.965v141.241H0v52.966h158.897v141.242h52.965V282.482H512z"
            />
        </SvgWrapper>
    );
}
export default SvgFlagSweden;
