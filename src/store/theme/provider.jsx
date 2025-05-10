import { useState, useEffect } from "react";
import { ThemeContext } from "./context";

const THEME_STORAGE_KEY = "CALCULATOR_THEME";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem(THEME_STORAGE_KEY) || "theme-1"
  );
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-1", "theme-2", "theme-3");
    root.classList.add(theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
