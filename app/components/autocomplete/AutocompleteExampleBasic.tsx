"use client";

import { Autocomplete } from "../../../components";
import { Item } from "react-stately";

export default function Example() {
  return (
    <Autocomplete
      label="Choose a country"
      defaultItems={[
        {
          key: "et",
          name: "Estonia",
        },
        {
          key: "lv",
          name: "Latvia",
        },
      ]}
      placeholder="Enter a country name"
      clearButtonAriaLabel="Clear field"
    >
      {(item) => <Item key={item.key}>{item.name}</Item>}
    </Autocomplete>
  );
}
