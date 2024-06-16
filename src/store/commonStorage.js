import { create } from 'zustand';

export const useCommonState = create()((set) => ({
  sleep: false,
  setSleep: (sleep) => set({ sleep }),
  networkConnected: true,
  setNetWorkConnected: (networkConnected) => set({ networkConnected }),
  missions: [],
  setMissions: (missions) => set({ missions }),
  batteryLevel: null,
  setBatteryLevel: (batteryLevel) => set({ batteryLevel }),
}));
