import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useLocalStorage = create()(
  persist(
    (set) => ({
      locale: 'vi',
      setLocale: (locale) => set({ locale }),
    }),
    {
      name: 'local-storage',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => () => {
        // useLocalStorage.setState({accessToken: ''});
      },
    },
  ),
);
