import React from "react";
import { useContext, createContext, useState, ReactNode } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

interface ThemeProviderPropType {
  children: ReactNode;
}
const ThemeContext = createContext<ThemeContextType>({
  theme: "after_dark",
  setTheme: () => {},
});

export const ThemeProvider: React.FC<ThemeProviderPropType> = ({
  children,
}) => {
  const [theme, setTheme] = useState("after_dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  return context;
};
