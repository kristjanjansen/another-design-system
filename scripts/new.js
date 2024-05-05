import { mkdir, write, writeJSON } from "../utils/utils.js";
//import menu from "../app/menu.json" assert { type: "json" };

const name = "Hello";
const lowercaseName = name.toLowerCase();

await mkdir(`./components/${name}`);
await write(
  `./app/components/${name}/${name}.tsx`,
  `const ${name} = () => {}
${name}.displayName = "${name}";
export default ${name};`
);

// Create docs

await mkdir(`./app/components/${lowercaseName}`);
await write(`./app/components/${lowercaseName}/page.mdx`, `# ${name}`);

//menu[0].items.push({ name, path: `/components/${lowercaseName}` });
//writeJSON("./app/menu.json", menu);
