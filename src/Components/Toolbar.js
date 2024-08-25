"use client";

import React, { useState } from "react";
import { saveAs } from 'file-saver';

const Toolbar = ({ handleExportCSV }) => {
  const [isMerging, setIsMerging] = useState(false);

  const applyStyle = (command, value) => {
    document.execCommand(command, false, value || null);
  };

  const handleMergeCells = () => {
    setIsMerging(true);
    alert("Select cells to merge");
  };

  return (
    <div className="flex space-x-2 mb-4 p-4 bg-gray-100 rounded-md shadow-md">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => applyStyle("bold")}
      >
        Bold
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => applyStyle("italic")}
      >
        Italic
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={() => applyStyle("foreColor", "#FF0000")}
      >
        Text Red
      </button>
      <button
        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        onClick={() => applyStyle("backColor", "#FFD700")}
      >
        Highlight
      </button>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={() => applyStyle("undo")}
      >
        Undo
      </button>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={() => applyStyle("redo")}
      >
        Redo
      </button>
      <button
        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        onClick={handleMergeCells}
      >
        Merge Cells
      </button>
      <button
        className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        onClick={handleExportCSV}
      >
        Export CSV
      </button>
    </div>
  );
};

export default Toolbar;