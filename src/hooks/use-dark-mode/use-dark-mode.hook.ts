import { useState, useEffect, useCallback } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const setMode = useCallback((mode: string) => {
    setTheme(mode);
    window.localStorage.setItem('darkMode', mode);
    document.documentElement.classList.add(mode);
    document.documentElement.classList.remove(mode === 'light' ? 'dark' : 'light');
  }, []);

  const toggleTheme = useCallback(() => {
    theme === 'dark' ? setMode('light') : setMode('dark');
  }, [setMode, theme]);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('darkMode');
    localTheme ? setTheme(localTheme) : setMode('light');
  }, [setMode]);

  return {
    theme,
    toggleTheme,
  };
};
