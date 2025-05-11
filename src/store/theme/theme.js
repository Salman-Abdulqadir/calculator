import { create } from "zustand";

export const THEME_STORAGE_KEY = "CALCULATOR_THEME";
export const useTheme = create((set) => ({
  theme: localStorage.getItem(THEME_STORAGE_KEY) || "theme-1",
  setTheme: (theme) => set({ theme }),
}));
