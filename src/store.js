import create from "zustand";

export const useStore = create((set) => ({
    score: 0,
    incrementScore: () => set((state) => ({ score: state.score + 1 })),
    decrementScore: () => set((state) => ({ score: state.score - 1 })),
  }));