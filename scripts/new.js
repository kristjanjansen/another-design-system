import { mkdir, read, write, readJSON, writeJSON } from "../utils/utils.js";

const name = process.argv[2];

if (name) {
  const lowercaseName = name.toLowerCase();

  await mkdir(`./components/${name}`);

  // Create component

  const componentTemplate = `import React from "react";

import "./${name}.module.scss";

const ${name} = (props) => {
  return <div {...props}>${name}</div>    
};

${name}.displayName = "${name}";
export default ${name};`;

  await write(`./components/${name}/${name}.tsx`, componentTemplate);

  // Create styles

  const styleTemplate = `@use '../../utils/mixins' as *;`;

  await write(`./components/${name}/${name}.module.scss`, styleTemplate);

  // Create test

  const testTemplate = `import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import ${name} from "./${name}";

describe("${name}", () => {
  test("renders without errors", async () => {
    // data-testid requires {...props} passed to the component
    // If it is not passed, the test will fail
    // You can replace "test()" with "test.skip()" to skip the test
    render(<${name} data-testid="${lowercaseName}">${name}</${name}>);
    const el = screen.getByTestId("${lowercaseName}") as HTMLElement;
    expect(el).toBeInTheDocument();
  });
});
`;

  await write(`./components/${name}/${name}.test.tsx`, testTemplate);

  // Update component index

  let indexTs = await read("./components/index.ts");

  const entry = `export { default as ${name} } from "./${name}/${name}";`;
  indexTs = indexTs.replace(entry, "");
  indexTs = indexTs + "\n" + entry;

  await write(`./components/index.ts`, indexTs);

  // Create docs page

  const docsTemplate = `import { ${name} } from "../../../components"

# ${name}

## Import

\`\`\`jsx
import { ${name} } from '@enefit/eds'
\`\`\`

## Basic example

\`\`\`jsx
<${name} />
\`\`\`

<${name} />
`;

  await mkdir(`./app/components/${lowercaseName}`);
  await write(`./app/components/${lowercaseName}/page.mdx`, docsTemplate);

  // Update menu

  const menu = await readJSON("./app/menu.json");

  const updatedMenu = menu;
  const componentsIndex = updatedMenu.findIndex(
    (item) => item.title === "Components"
  );
  const duplicate = updatedMenu[componentsIndex].items.find(
    (item) => item.title === name
  );

  if (!duplicate) {
    updatedMenu[componentsIndex].items.push({
      title: name,
      path: `/components/${lowercaseName}`,
    });
    updatedMenu[componentsIndex].items = updatedMenu[
      componentsIndex
    ].items.sort((a, b) => a.title.localeCompare(b.title));
  }

  writeJSON("./app/menu.json", updatedMenu);
} else {
  console.log(`\nUsage: node ./scripts/new.js Component\n`);
}
