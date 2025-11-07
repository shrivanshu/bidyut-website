import React, { createContext, useContext, useEffect, useState, lazy, Suspense } from 'react';
import type { Language } from './OptimizedLanguageContext.types';
import { loadLocale } from '../utils/loadLocale';

interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getLanguageName: (lang: Language) => string;
  getLanguageFlag: (lang: Language) => string;
  getSupportedLanguages: () => Array<{code: Language, name: string, flag: string}>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [translations, setTranslations] = useState<Record<string, any>>({});

  useEffect(() => {
    // Check for saved language preference or browser language
    const savedLanguage = localStorage.getItem("language") as Language;
    const supportedLanguages: Language[] = ['en', 'hi', 'bn', 'ja', 'mr', 'gu', 'ta', 'te', 'kn', 'ru', 'zh'];
    
    const initialLang = savedLanguage && supportedLanguages.includes(savedLanguage) 
      ? savedLanguage 
      : navigator.language.split('-')[0] as Language;

    if (supportedLanguages.includes(initialLang)) {
      changeLanguage(initialLang);
    } else {
      changeLanguage('en');
    }
  }, []);

  const changeLanguage = async (lang: Language) => {
    try {
      const translation = await loadLocale(lang);
      setTranslations(prev => ({ ...prev, [lang]: translation }));
      setCurrentLanguage(lang);
      localStorage.setItem("language", lang);
      document.documentElement.lang = lang;
      window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    } catch (error) {
      console.error(`Failed to load language ${lang}:`, error);
      // Fallback to English if loading fails
      if (lang !== 'en') {
        changeLanguage('en');
      }
    }
  };

  const t = (key: string): string => {
    const translation = translations[currentLanguage];
    if (!translation) return key;
    
    const keys = key.split('.');
    let value = translation;
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }
    
    return value || key;
  };

  const getLanguageName = (lang: Language): string => {
    const languageNames: Record<Language, string> = {
      en: 'English',
      hi: 'हिंदी',
      bn: 'বাংলা',
      ja: '日本語',
      mr: 'मराठी',
      gu: 'ગુજરાતી',
      ta: 'தமிழ்',
      te: 'తెలుగు',
      kn: 'ಕನ್ನಡ',
      ru: 'Русский',
      zh: '中文'
    };
    return languageNames[lang] || lang;
  };

  const getLanguageFlag = (lang: Language): string => {
    const flags: Record<Language, string> = {
      en: '🇺🇸',
      hi: '🇮🇳',
      bn: '🇧🇩',
      ja: '🇯🇵',
      mr: '🇮🇳',
      gu: '🇮🇳',
      ta: '🇮🇳',
      te: '🇮🇳',
      kn: '🇮🇳',
      ru: '🇷🇺',
      zh: '🇨🇳'
    };
    return flags[lang] || '🌐';
  };

  const getSupportedLanguages = () => {
    const languages: Language[] = ['en', 'hi', 'bn', 'ja', 'mr', 'gu', 'ta', 'te', 'kn', 'ru', 'zh'];
    return languages.map(lang => ({
      code: lang,
      name: getLanguageName(lang),
      flag: getLanguageFlag(lang)
    }));
  };

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage, 
      changeLanguage, 
      t, 
      getLanguageName, 
      getLanguageFlag,
      getSupportedLanguages
    }}>
      <Suspense fallback={<div>Loading language...</div>}>
        {children}
      </Suspense>
    </LanguageContext.Provider>
  );
};