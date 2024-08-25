"use client";
import React, { useState } from "react";

const NUM_ROWS = 20;
const NUM_COLS = 20;
const CELL_WIDTH = 100;
const CELL_HEIGHT = 40;

const Grid = () => {
  const [copiedContent, setCopiedContent] = useState("");

  const handleCopy = (event) => {
    setCopiedContent(event.target.innerText);
  };

  const handlePaste = (event) => {
    event.target.innerText = copiedContent;
  };

  const cells = Array.from({ length: NUM_ROWS }, (_, rowIndex) =>
    Array.from({ length: NUM_COLS }, (_, colIndex) => (
      <div
        key={`${rowIndex}-${colIndex}`}
        className="border border-gray-300 text-center cursor-pointer hover:bg-gray-200"
        contentEditable
        onCopy={handleCopy}
        onPaste={handlePaste}
        style={{
          width: `${CELL_WIDTH}px`,
          height: `${CELL_HEIGHT}px`,
          lineHeight: `${CELL_HEIGHT}px`,
        }}
      />
    ))
  );

  return (
    <div className="relative">
      <div
        id="editor"
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${NUM_COLS}, ${CELL_WIDTH}px)`,
          gridTemplateRows: `repeat(${NUM_ROWS}, ${CELL_HEIGHT}px)`,
          gap: "1px",
        }}
      >
        {cells}
      </div>
    </div>
  );
};

export default Grid;