import { create } from 'zustand';

export const useCommonState = create()(
  (set) => ({
    status: false,
    setStatus: (status) => set({ status }),
  })
);
