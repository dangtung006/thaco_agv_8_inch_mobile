import { create } from 'zustand';

export const useCommonState = create()((set) => ({
  sleep: false,
  setSleep: (sleep) => set({ sleep }),
}));
