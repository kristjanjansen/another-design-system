"use client";

import React, { useState } from "react";

const Test = () => {
  const [text, setText] = useState("Hi");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Entered text: {text}</p>
    </div>
  );
};

export default Test;
