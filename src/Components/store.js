import create from 'zustand';

const useStore = create((set) => ({
  cells: {},
  updateCell: (id, value) => set((state) => ({
    cells: { ...state.cells, [id]: value },
  })),
}));

export default useStore;