import { createContext, useState, useEffect } from "react";

const themes = {
  dark: {
    dark: "#2c2c2c",
    darker: "#1e1e1e",
    white: "#ffffff",
    gray: "#404048",
    purple: "#230B3D",
  },
  light: {
    dark: "#cccccc",
    darker: "#ffffff",
    white: "#000000",
    gray: "#a1a1a1"
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    localStorage.setItem("isDark", JSON.stringify(!isDark));
    setIsDark(!isDark);
  };
  const theme = isDark ? themes.dark : themes.light;

  useEffect(() => {
    const isDark = localStorage.getItem("isDark") === "true";
    setIsDark(isDark);
  }, []);

  return (
    <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};