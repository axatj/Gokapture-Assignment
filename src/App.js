// // App.js
// import React, { useState } from "react";
// import Cell from "./Components/Cell";

// // const DebugComponent = () => {
// //   const cells = useStore((state) => state.cells);
// //   console.log("Current state of cells:", cells);

// //   return <pre>{JSON.stringify(cells, null, 2)}</pre>;
// // };

// const App = () => {
//   const [cells, setCells] = useState({});

//   // Update cell value in state
//   const updateCell = (id, value) => {
//     setCells((prevCells) => ({
//       ...prevCells,
//       [id]: value,
//     }));
//   };

//   return (
//     <div>
//       <h1 className="text-center text-2xl font-bold">Spreadsheet App</h1>
//       <div className="grid grid-cols-4 gap-1 p-4">
//         <Cell id="cell-1" />
//         <Cell id="cell-2" />
//         {/* Add more cells as needed */}
//       </div>
//       {/* <DebugComponent /> */}
//     </div>
//   );
// };

// export default App;

// src/App.js
import React, { useState, useEffect } from "react";
import Cell from './Components/Cell';
import EditableCell  from "./Components/EditableCell";
import Grid from "./Components/Grid";
import GrowAnimation from "./Components/GrowAnimation";
// import Header from "./Components/Header";
// import RootLayout from "./Components/layout";
// import Page from "./Components/Page";
// import Sidebar from "./Components/Sidebar";
// import Spinner from "./Components/Spinner";
// import useStore from "./Components/store";
// import Toolbar from "./Components/Toolbar";
// import useSpreadsheetStore from "./Components/useSpreadSheetStore";

const App = () => {
  // Initialize state for cells
  const [cells, setCells] = useState({});

  // Load cell data from local storage when the component mounts
  useEffect(() => {
    const savedCells = JSON.parse(localStorage.getItem("cells")) || {};
    setCells(savedCells);
  }, []);

  // Save cell data to local storage whenever cells state changes
  useEffect(() => {
    localStorage.setItem("cells", JSON.stringify(cells));
  }, [cells]);

  // Update cell value in state
  const updateCell = (id, value) => {
    setCells((prevCells) => ({
      ...prevCells,
      [id]: value,
    }));
  };

  // Generate cells for a grid with 5 columns and 4 rows
  const generateCells = (cols, rows) => {
    const cellElements = [];
    for (let r = 1; r <= rows; r++) {
      for (let c = 1; c <= cols; c++) {
        const id = `cell-${(r - 1) * cols + c}`;
        cellElements.push(
          <Cell
            key={id}
            id={id}
            value={cells[id] || ""}
            onChange={updateCell}
          />
        );
      }
    }
    return cellElements;
  };
  const editableCells=(cols, rows)=>{
    const cellElements = []; 
    for (let r = 1; r <= rows; r++) {
      for (let c = 1; c <= cols; c) {
        const id = `cell-${(r - 1) * cols + c}`
        cellElements.push(
          <EditableCell
          key={id}
          id={id}
          value={cells[id] || ""}
          onChange={updateCell}
          />
          );
          }
          
          return cellElements;
          }
        };

        const GridCells=(cols, rows)=>{
          const cellElements = []; 
          for (let r = 1; r <= rows; r++) {
            for (let c = 1; c <= cols; c) {
              const id = `cell-${(r - 1) * cols + c}`
              cellElements.push(
                <Grid
                key={id}
                id={id}
                value={cells[id] || ""}
                onChange={updateCell}
                />
                );
                }
                
                return cellElements;
                }
              };
      
              const GrowAnimations=(cols, rows)=>{
                const cellElements = []; 
                for (let r = 1; r <= rows; r++) {
                  for (let c = 1; c <= cols; c) {
                    const id = `cell-${(r - 1) * cols + c}`
                    cellElements.push(
                      <GrowAnimation
                      key={id}
                      id={id}
                      value={cells[id] || ""}
                      onChange={updateCell}
                      />
                      );
                      }
                      
                      return cellElements;
                      }
                    };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      {/* <h1 className="text-center text-2xl font-bold mb-4">Spreadsheet App</h1> */}
      <h1 className="App-header">Spreadsheet App</h1>
      <div className="grid grid-cols-5 gap-2">
        {generateCells(10, 10)} {/* 5 columns and 4 rows */}
        {editableCells(10, 10)} {   } 
        {GridCells(10, 10)}{}
        {GrowAnimation(10,10)} {}
      </div>
    </div>
  );

};

export default App;
