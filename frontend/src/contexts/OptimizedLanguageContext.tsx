import React, { createContext, useContext, useEffect, useState } from 'react';
import { en } from '../locales/en';
import { hi } from '../locales/hi';
import { mr } from '../locales/mr';
import { gu } from '../locales/gu';
import { ta } from '../locales/ta';
import { te } from '../locales/te';
import { kn } from '../locales/kn';
import { ur } from '../locales/ur';
import { bn } from '../locales/bn';
import { ja } from '../locales/ja';
import { ru } from '../locales/ru';
import { zh } from '../locales/zh';

export type Language = 'en' | 'hi' | 'ur' | 'bn' | 'ja' | 'mr' | 'gu' | 'ta' | 'te' | 'kn' | 'ru' | 'zh';

interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getLanguageName: (lang: Language) => string;
  getLanguageFlag: (lang: Language) => string;
  getSupportedLanguages: () => Array<{code: Language, name: string, flag: string}>;
}

// Consolidated translations object
const translations = {
  en,
  hi, 
  ur,
  bn,
  ja,
  mr,
  gu,
  ta,
  te,
  kn,
  ru,
  zh
};

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

  useEffect(() => {
    // Check for saved language preference or browser language
    const savedLanguage = localStorage.getItem("language") as Language;
    const supportedLanguages: Language[] = ['en', 'hi', 'ur', 'bn', 'ja', 'mr', 'gu', 'ta', 'te', 'kn', 'ru', 'zh'];
    
    if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split('-')[0] as Language;
      if (supportedLanguages.includes(browserLang)) {
        setCurrentLanguage(browserLang);
      }
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem("language", lang);
    
    // Update document language attribute for accessibility
    document.documentElement.lang = lang;
    
    // Trigger custom event for other components that might need to react
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
  };

  const t = (key: string): string => {
    const translation = translations[currentLanguage];
    if (!translation) return key;
    
    // Handle nested keys (e.g., 'common.loading')
    const keys = key.split('.');
    let value = translation as any;
    
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
      ur: 'اردو',
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
      ur: '🇵🇰',
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
    const languages: Language[] = ['en', 'hi', 'ur', 'bn', 'ja', 'mr', 'gu', 'ta', 'te', 'kn', 'ru', 'zh'];
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
      {children}
    </LanguageContext.Provider>
  );
};
