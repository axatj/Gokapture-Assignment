"use client";

import React, { useState } from "react";



const EditableCell = ({ rowIndex, colIndex }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  
  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      className="w-16 h-16 border border-gray-300 text-center"
      placeholder={`${rowIndex},${colIndex}`}
    />
  );
};

export default EditableCell;