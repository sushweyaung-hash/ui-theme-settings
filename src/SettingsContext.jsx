import { createContext, useContext, useEffect, useState } from 'react';

const SettingsContext = createContext();

const defaultSettings = {
  theme: 'light',
  language: 'en',
};

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(defaultSettings);

  // 1) Load from localStorage when app starts
  useEffect(() => {
    const saved = localStorage.getItem('app-settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Merge with defaults in case something is missing
        setSettings((prev) => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Error parsing saved settings:', error);
      }
    }
  }, []);

  // 2) Save to localStorage whenever settings change
  useEffect(() => {
    localStorage.setItem('app-settings', JSON.stringify(settings));
  }, [settings]);

  // Actions
  const setTheme = (theme) => {
    setSettings((prev) => ({ ...prev, theme }));
  };

  const setLanguage = (language) => {
    setSettings((prev) => ({ ...prev, language }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  const value = {
    theme: settings.theme,
    language: settings.language,
    setTheme,
    setLanguage,
    resetSettings,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

// Custom hook for easy use
export function useSettings() {
  return useContext(SettingsContext);
}
