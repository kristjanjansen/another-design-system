import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgPackageWindColor(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
            {...props}
        >
            <defs>
                <style>{'.package-wind-color_svg__d{fill:#34b233}'}</style>
            </defs>
            <g id="package-wind-color_svg__b">
                <g id="package-wind-color_svg__c">
                    <path
                        d="M60 4c30.88 0 56 25.12 56 56s-25.12 56-56 56S4 90.88 4 60 29.12 4 60 4m0-4C26.86 0 0 26.86 0 60s26.86 60 60 60 60-26.86 60-60S93.14 0 60 0Z"
                        fill="#34b233"
                        style={{
                            fill: '#4c5b68',
                        }}
                    />
                    <path
                        className="package-wind-color_svg__d"
                        d="M12.36 60c0 26.31 21.33 47.64 47.64 47.64S107.64 86.31 107.64 60H12.36Zm66.7 31.11c-6.97 0-12.64-5.67-12.64-12.64 0-1.09.89-1.98 1.98-1.98s1.98.89 1.98 1.98c0 4.79 3.89 8.68 8.68 8.68s8.68-3.89 8.68-8.68-3.89-8.68-8.68-8.68H18.82c-1.09 0-1.98-.89-1.98-1.98s.89-1.98 1.98-1.98h60.24c6.97 0 12.64 5.67 12.64 12.64s-5.67 12.64-12.64 12.64ZM82.96 53.97H15.69c-1.07 0-1.94-.87-1.94-1.94s.87-1.94 1.94-1.94h67.27c7.03 0 12.75-5.72 12.75-12.76s-5.72-12.76-12.75-12.76S70.2 30.29 70.2 37.33c0 1.07-.87 1.94-1.94 1.94s-1.94-.87-1.94-1.94c0-9.17 7.46-16.63 16.63-16.63s16.63 7.46 16.63 16.63-7.46 16.63-16.63 16.63Z"
                        fill="#34b233"
                    />
                    <path
                        className="package-wind-color_svg__d"
                        d="M18.78 43.33c-1.07 0-1.94-.87-1.94-1.94s.87-1.94 1.94-1.94h32.66c4.6 0 8.35-3.75 8.35-8.35s-3.74-8.35-8.35-8.35-8.35 3.74-8.35 8.35c0 1.07-.87 1.94-1.94 1.94s-1.94-.87-1.94-1.94c0-6.74 5.48-12.22 12.22-12.22s12.22 5.48 12.22 12.22-5.48 12.22-12.22 12.22H18.78Z"
                        fill="#34b233"
                    />
                </g>
            </g>
        </SvgWrapper>
    );
}
export default SvgPackageWindColor;
