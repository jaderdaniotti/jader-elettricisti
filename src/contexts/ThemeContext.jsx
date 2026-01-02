import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve essere usato all\'interno di ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Inizializza il tema dal localStorage in modo sincrono per evitare flash
  const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved || 'dark';
    }
    return 'dark';
  };

  const [theme, setTheme] = useState(getInitialTheme);
  const [mounted, setMounted] = useState(false);

  // Applica il tema iniziale al mount
  useEffect(() => {
    const initialTheme = getInitialTheme();
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setMounted(true);
  }, []);

  // Applica classe quando il tema cambia
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      
      // Applica immediatamente
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      return newTheme;
    });
  };

  // Sempre wrappa i children nel Provider per evitare errori
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
};

