// // src/Cell.js
// import React from "react";
// import { useStore } from "../store";

// const Cell = ({ id }) => {
//   const value = useStore((state) => state.cells[id] || "");
//   const updateCell = useStore((state) => state.updateCell);

//   const handleChange = (e) => {
//     updateCell(id, e.target.value);
//   };

//   return (
//     <input
//       type="text"
//       value={value}
//       onChange={handleChange}
//       className="w-full h-full p-2 border border-gray-300 focus:outline-none focus:border-blue-500"
//     />
//   );
// };

// export default Cell;

// src/Components/Cell.js
import React from "react";

const Cell = ({ id, value, onChange }) => {
  const handleChange = (e) => {
    onChange(id, e.target.value);
  };

  return (
    <div className="border border-gray-600 rounded-lg overflow-hidden flex flex-col w-24 h-24 bg-gray-900 m-1 border-2">
      {" "}
      {/* Added margin here */}
      <div className="bg-gray-700 p-2 border-b border-gray-600 text-center font-semibold text-xs text-white border-2">
        {`Cell ${id.replace("cell-", "")}`}
      </div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="w-full h-full p-2 border border-gray-600 border-2 bg-gray-800 text-white focus:outline-none text-sm"
        style={{ boxSizing: "border-box" }} // Ensures padding doesn't affect width/height
      />
    </div>
  );
};

export default Cell;
