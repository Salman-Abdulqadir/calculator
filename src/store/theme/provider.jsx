import { useEffect } from "react";

import { THEME_STORAGE_KEY, useTheme } from "./theme";

export const ThemeProvider = ({ children }) => {
  const { theme } = useTheme();
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-1", "theme-2", "theme-3");
    root.classList.add(theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return <>{children}</>;
};
