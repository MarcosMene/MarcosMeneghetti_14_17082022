import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

export const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  //to simulate internet connection
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 100);

  return (
    <span>
      <label htmlFor="search">Search: </label>

      <input
        id="search"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  );
};
