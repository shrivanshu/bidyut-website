import React, { createContext, useContext, useState, useEffect } from 'react';

// Enhanced Language Context with Better Fallback and Validation
interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  t: (key: string, fallback?: string) => string;
  isTranslationMissing: (key: string) => boolean;
  getTranslationQuality: () => TranslationQuality;
}

interface TranslationQuality {
  completeness: number;
  missingCritical: string[];
  hasAllCriticalKeys: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Critical keys that must be available for core functionality
const CRITICAL_KEYS = [
  'home', 'aboutUs', 'contact', 'school', 'robots',
  'learnRobotics', 'heroDescription', 'scheduleDemoCall',
  'getInTouch', 'sendMessage', 'ourOfferings'
];

// Import all translations
import { en } from '../locales/en';
import { hi } from '../locales/hi';
import { bn } from '../locales/bn';
import { ja } from '../locales/ja';
import { mr } from '../locales/mr';
import { gu } from '../locales/gu';
import { ta } from '../locales/ta';
import { te } from '../locales/te';
import { kn } from '../locales/kn';
import { ru } from '../locales/ru';
import { zh } from '../locales/zh';

const translations = {
  en, hi, bn, ja, mr, gu, ta, te, kn, ru, zh
};

// Language display names
const languageNames = {
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

export const EnhancedLanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [translationWarnings, setTranslationWarnings] = useState<string[]>([]);

  useEffect(() => {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('bidyut-language');
    if (savedLanguage && translations[savedLanguage as keyof typeof translations]) {
      setCurrentLanguage(savedLanguage);
    } else {
      // Auto-detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (translations[browserLang as keyof typeof translations]) {
        setCurrentLanguage(browserLang);
      }
    }
  }, []);

  const setLanguage = (lang: string) => {
    if (translations[lang as keyof typeof translations]) {
      setCurrentLanguage(lang);
      localStorage.setItem('bidyut-language', lang);
      
      // Validate translation quality for the selected language
      const quality = getTranslationQuality(lang);
      if (!quality.hasAllCriticalKeys && lang !== 'en') {
        console.warn(`⚠️ Language ${lang} is missing critical translations:`, quality.missingCritical);
        setTranslationWarnings(quality.missingCritical);
      } else {
        setTranslationWarnings([]);
      }
    }
  };

  const t = (key: string, fallback?: string): string => {
    const currentTranslations = translations[currentLanguage as keyof typeof translations];
    
    // First try current language
    if (currentTranslations && currentTranslations[key as keyof typeof currentTranslations]) {
      const translation = currentTranslations[key as keyof typeof currentTranslations] as string;
      if (translation && translation.trim()) {
        return translation;
      }
    }

    // Fallback to English if current language doesn't have the key
    if (currentLanguage !== 'en' && en[key as keyof typeof en]) {
      // Log missing translation for development
      if (process.env.NODE_ENV === 'development') {
        console.warn(`🔤 Missing translation for "${key}" in ${currentLanguage}, using English fallback`);
      }
      return en[key as keyof typeof en] as string;
    }

    // Final fallback to provided fallback or key itself
    return fallback || key;
  };

  const isTranslationMissing = (key: string): boolean => {
    const currentTranslations = translations[currentLanguage as keyof typeof translations];
    return !currentTranslations || !currentTranslations[key as keyof typeof currentTranslations];
  };

  const getTranslationQuality = (lang?: string): TranslationQuality => {
    const targetLang = lang || currentLanguage;
    const targetTranslations = translations[targetLang as keyof typeof translations];
    
    if (!targetTranslations || targetLang === 'en') {
      return { completeness: 100, missingCritical: [], hasAllCriticalKeys: true };
    }

    const allKeys = Object.keys(en);
    const missingKeys = allKeys.filter(key => !targetTranslations[key as keyof typeof targetTranslations]);
    const missingCritical = CRITICAL_KEYS.filter(key => !targetTranslations[key as keyof typeof targetTranslations]);
    
    const completeness = Math.round(((allKeys.length - missingKeys.length) / allKeys.length) * 100);
    
    return {
      completeness,
      missingCritical,
      hasAllCriticalKeys: missingCritical.length === 0
    };
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      setLanguage,
      t,
      isTranslationMissing,
      getTranslationQuality
    }}>
      {children}
      
      {/* Development Warning for Missing Translations */}
      {process.env.NODE_ENV === 'development' && translationWarnings.length > 0 && (
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          background: '#ff6b6b',
          color: 'white',
          padding: '10px',
          borderRadius: '0 0 0 10px',
          fontSize: '12px',
          zIndex: 9999,
          maxWidth: '300px'
        }}>
          <strong>Translation Warning:</strong><br />
          Missing critical keys: {translationWarnings.join(', ')}
        </div>
      )}
    </LanguageContext.Provider>
  );
};

export const useEnhancedLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useEnhancedLanguage must be used within an EnhancedLanguageProvider');
  }
  return context;
};

// Translation Quality Component for Admin/Development
export const TranslationQualityIndicator: React.FC = () => {
  const { currentLanguage, getTranslationQuality } = useEnhancedLanguage();
  const quality = getTranslationQuality();
  
  if (currentLanguage === 'en') return null;

  const getQualityColor = (completeness: number) => {
    if (completeness >= 95) return '#10b981'; // green
    if (completeness >= 80) return '#f59e0b'; // yellow
    return '#ef4444'; // red
  };

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      fontSize: '12px',
      color: getQualityColor(quality.completeness)
    }}>
      <span>📊</span>
      <span>{quality.completeness}%</span>
      {!quality.hasAllCriticalKeys && <span title="Missing critical translations">⚠️</span>}
    </div>
  );
};

// Export language utilities
export { languageNames, CRITICAL_KEYS };
export default EnhancedLanguageProvider;