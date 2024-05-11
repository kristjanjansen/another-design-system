/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const {
  identifier,
  jsxClosingElement,
  jsxElement,
  jsxIdentifier,
  jsxOpeningElement,
  jsxSpreadAttribute,
} = require('@babel/types')

const svgTemplate = (
  { imports, componentName, jsx, exports },
  { tpl },
) => {

  const WrapperComponent = jsxElement(
    jsxOpeningElement(jsxIdentifier('SvgWrapper'), [
      ...jsx.openingElement.attributes,
      jsxSpreadAttribute(identifier('props')),
    ]),
    jsxClosingElement(jsxIdentifier('SvgWrapper')),
    jsx.children,
    false
  )

  return tpl`${imports}
  import SvgWrapper from "../_helpers/IconWrapper";

  interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
  };

  function ${componentName}(props: IconProps) {
    return ${WrapperComponent};
  }

  ${exports}
  `
}

module.exports = svgTemplate
