import create from 'zustand';

const useSpreadsheetStore = create((set) => ({
  gridData: {},
  updateCell: (row, col, value) => set((state) => {
    const updatedGrid = { ...state.gridData, [`${row}-${col}`]: value };
    return { gridData: updatedGrid };
  }),
}));

export default useSpreadsheetStore;