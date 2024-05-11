#!/bin/bash

# Define the list of directories to copy, each on a new line for readability
directories=(
  "Accordion"
  "AccordionGroup"
  "Avatar"
  "Button"
  "Checkbox"
  "CheckboxGroup"
  "InputSlider"
  "Link"
  "Switch"
  "Textfield"
  "SelectListBox"
  "Popover"
  "Autocomplete"
)

# Loop over each directory
for dir in "${directories[@]}"; do
  rsync -av --exclude='*.test.tsx' "../design-system/components/$dir/" "components/$dir/"
done