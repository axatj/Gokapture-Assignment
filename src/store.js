// store.js
import create from "zustand";

export const useStore = create((set) => ({
  cells: {},
  updateCell: (id, value) =>
    set((state) => ({
      cells: {
        ...state.cells,
        [id]: value,
      },
    })),
}));
