import { create } from "zustand";

// Al trabaajando en TS, podemos espicificar como queremos que luzca nuestro estado
interface BearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  increaseBlackBears: (by: number) => void;
}

export const useBearStore = create<BearState>()((set) => ({
  blackBears: 10,
  polarBears: 5,
  pandaBears: 1,

  increaseBlackBears: (by: number) =>
    set((state) => ({ blackBears: state.blackBears + by })),
}));
