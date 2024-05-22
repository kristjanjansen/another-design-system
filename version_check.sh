#!/bin/bash

# Function to extract version from package.json
get_version() {
  grep '"version"' package.json | head -n 1 | awk -F: '{ print $2 }' | sed 's/[", ]//g'
}

# Check if the previous commit exists
if git rev-parse HEAD^ &>/dev/null; then
  git show HEAD^:package.json > prev_package.json
  prev_version=$(grep '"version"' prev_package.json | head -n 1 | awk -F: '{ print $2 }' | sed 's/[", ]//g')
  rm prev_package.json
else
  prev_version="null"
fi

current_version=$(get_version)

if [ "$prev_version" != "null" ] && [ "$prev_version" != "$current_version" ]; then
  exit 0  # Version changed
else
  exit 1  # Version did not change
fi
