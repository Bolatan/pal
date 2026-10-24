'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { translations, type Language, type TranslationKey } from '@/lib/i18n';

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'ileife-language';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const stored = typeof window !== 'undefined'
      ? (localStorage.getItem(STORAGE_KEY) as Language | null)
      : null;
    if (stored === 'en' || stored === 'yo') {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'en' ? 'yo' : 'en');
  }, [language, setLanguage]);

  const t = useCallback(
    (key: TranslationKey) => {
      const dict = translations[language];
      return dict[key] ?? translations.en[key] ?? key;
    },
    [language],
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}