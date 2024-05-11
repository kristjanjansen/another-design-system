import { readJSON, writeJSON, write } from "../utils/utils.js";

import { createNew } from "./new.js";

const names = [
  "Accordion",
  "AccordionGroup",
  "Autocomplete",
  "Avatar",
  "Banner",
  "Breadcrumbs",
  "Button",
  "Calendar",
  "Card",
  "CardIcon",
  "Checkbox",
  "CheckboxGroup",
  "Choice",
  "ChoiceToggle",
  "ComparisonCard",
  "ComparisonCardGroup",
  "Container",
  "DatePicker",
  "Dialog",
  "Feature",
  "Hero",
  "Icons",
  "ImageSection",
  "InfoHint",
  "InputSlider",
  "Link",
  "List",
  "Modal",
  "Notification",
  "PageTitle",
  "Phone",
  "Popover",
  "QuickLink",
  "Radio",
  "RadioGroup",
  "Select",
  "SelectListBox",
  "SkipToContent",
  "Stack",
  "Step",
  "StepGroup",
  "Stepper",
  "SubmissionMessage",
  "Switch",
  "Tab",
  "TabPanel",
  "Tabs",
  "Textarea",
  "Textfield",
  "Toast",
  "Typography",
];

await Promise.all(names.map((name) => createNew(name, false)));

const menu = await readJSON("./app/menu.json");

const updatedMenu = menu;
const componentsIndex = updatedMenu.findIndex(
  (item) => item.title === "Components"
);

updatedMenu[componentsIndex].items = names
  .map((name) => ({
    title: name,
    path: `/components/${name.toLowerCase()}`,
  }))
  .sort((a, b) => a.title.localeCompare(b.title));

writeJSON("./app/menu.json", updatedMenu);

const indexNames = names.map(
  (name) => `export { default as ${name} } from "./${name}/${name}";`
);

const index = [
  'import "../styles/vars.css";',
  'export * from "../icons";',
  ...indexNames,
];
await write(`./components/index.ts`, index.join("\n"));
