#!/bin/bash

# Define the list of directories to copy, each on a new line for readability
directories=(
  "Banner"
  "Container"
  "Accordion"
  "AccordionGroup"
  "Autocomplete"
  "Avatar"
  "Button"
  "Checkbox"
  "CheckboxGroup"
  "InputSlider"
  "Link"
  "Popover"
  "SelectListBox"
  "Switch"
  "Textfield"
  "Breadcrumbs"
)

# Loop over each directory
for dir in "${directories[@]}"; do
  rsync -av --exclude='*.test.tsx' "../design-system/components/$dir/" "components/$dir/"
done