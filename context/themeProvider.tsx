import { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

interface ThemeContextType {
    themeMode: string;
    switchTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({ themeMode: 'light', switchTheme: (theme) => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeMode, setThemeMode] = useState('light');

const switchTheme = (theme: string): void => {
    setThemeMode(theme);
    document.documentElement.className = theme;
};

  return (
    <ThemeContext.Provider value={{ themeMode, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}