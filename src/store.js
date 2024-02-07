import create from "zustand";
import data from "./datas/questions.json";

export const useStore = create((set) => ({
  currentQuestionIndex: 1,
  incrementCurrentQuestionIndex: () =>
    set((state) => ({ currentQuestionIndex: state.currentQuestionIndex + 1 })),
  decrementCurrentQuestionIndex: () =>
    set((state) => ({ currentQuestionIndex: state.currentQuestionIndex - 1 })),
  setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),

  // Maping dynamique de valeur commune selon la taille du JSON.
  scores: new Array(data.questions.length).fill(0),
 // Puis action de venir les modifier par slot avec le slot et le montant.
 updateScoreSlot: (slotIndex, amount) =>
    set((state) => ({ scores: state.scores.map((slot, index) => (index === slotIndex ? amount : slot)) }))
}));
