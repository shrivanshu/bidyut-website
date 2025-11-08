import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'en' | 'hi' | 'bn' | 'ja' | 'mr' | 'gu' | 'ta' | 'te' | 'kn' | 'ru' | 'zh';

interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getLanguageName: (lang: Language) => string;
  getLanguageFlag: (lang: Language) => string;
  getSupportedLanguages: () => Array<{code: Language, name: string, flag: string}>;
}

const localeModules: Record<Language, () => Promise<{ [key: string]: any }>> = {
  en: () => import(/* webpackChunkName: "locale-en" */ '../locales/en').then(m => m),
  hi: () => import(/* webpackChunkName: "locale-hi" */ '../locales/hi').then(m => m),
  mr: () => import(/* webpackChunkName: "locale-mr" */ '../locales/mr').then(m => m),
  gu: () => import(/* webpackChunkName: "locale-gu" */ '../locales/gu').then(m => m),
  ta: () => import(/* webpackChunkName: "locale-ta" */ '../locales/ta').then(m => m),
  te: () => import(/* webpackChunkName: "locale-te" */ '../locales/te').then(m => m),
  kn: () => import(/* webpackChunkName: "locale-kn" */ '../locales/kn').then(m => m),
  bn: () => import(/* webpackChunkName: "locale-bn" */ '../locales/bn').then(m => m),
  ja: () => import(/* webpackChunkName: "locale-ja" */ '../locales/ja').then(m => m),
  ru: () => import(/* webpackChunkName: "locale-ru" */ '../locales/ru').then(m => m),
  zh: () => import(/* webpackChunkName: "locale-zh" */ '../locales/zh').then(m => m),
};

const loadedTranslations: Partial<Record<Language, any>> = {};

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

  const loadLocale = async (lang: Language) => {
    if (loadedTranslations[lang]) return;
    
    try {
      const module = await localeModules[lang]();
      loadedTranslations[lang] = module[lang] || module.default;
    } catch (error) {
      console.error(`Failed to load locale ${lang}:`, error);
      if (!loadedTranslations[lang]) {
        loadedTranslations[lang] = {};
      }
    }
  };

  useEffect(() => {
    const initLanguage = async () => {
      const savedLanguage = localStorage.getItem("language") as Language;
      const supportedLanguages: Language[] = ['en', 'hi', 'bn', 'ja', 'mr', 'gu', 'ta', 'te', 'kn', 'ru', 'zh'];
      
      let langToLoad: Language = 'en';
      
      if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
        langToLoad = savedLanguage;
      } else {
        const browserLang = navigator.language.split('-')[0] as Language;
        if (supportedLanguages.includes(browserLang)) {
          langToLoad = browserLang;
        }
      }
      
      await loadLocale(langToLoad);
      setCurrentLanguage(langToLoad);
    };
    
    initLanguage();
  }, []);

  const changeLanguage = (lang: Language) => {
    loadLocale(lang);
    setCurrentLanguage(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
  };

  const t = (key: string): string => {
    const translation = loadedTranslations[currentLanguage];
    if (!translation) return key;
    
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
      {children}
    </LanguageContext.Provider>
  );
};