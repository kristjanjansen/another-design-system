/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path')

function SvgIndexTemplate(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath))
    return `export { default as Svg${basename} } from './${basename}'`
  })
  return exportEntries.join('\n')
}

module.exports = SvgIndexTemplate