import React, { useState } from 'react';
import { useLanguage } from '../contexts/OptimizedLanguageContext';
import type { Language } from '../contexts/OptimizedLanguageContext';

interface LanguageSwitcherProps {
  variant?: 'dropdown' | 'buttons' | 'select' | 'floating';
  className?: string;
  showFlags?: boolean;
  showNames?: boolean;
  compact?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'dropdown',
  className = '',
  showFlags = true,
  showNames = true,
  compact = false
}) => {
  const { currentLanguage, changeLanguage, getSupportedLanguages, getLanguageName, getLanguageFlag } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const languages = getSupportedLanguages();

  const handleLanguageChange = (langCode: Language) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  // Dropdown variant
  if (variant === 'dropdown') {
    return (
      <div className={`relative inline-block text-left ${className}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          {showFlags && <span className="mr-2">{getLanguageFlag(currentLanguage)}</span>}
          {showNames && !compact && <span>{getLanguageName(currentLanguage)}</span>}
          {compact && <span>{currentLanguage.toUpperCase()}</span>}
          <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute right-0 z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 max-h-64 overflow-y-auto">
            <div className="py-1" role="menu" aria-orientation="vertical">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`${
                    currentLanguage === lang.code
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-700'
                  } group flex items-center px-4 py-2 text-sm w-full text-left hover:bg-gray-50`}
                  role="menuitem"
                >
                  {showFlags && <span className="mr-3">{lang.flag}</span>}
                  <span>{lang.name}</span>
                  {currentLanguage === lang.code && (
                    <span className="ml-auto">
                      <svg className="h-4 w-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Buttons variant (horizontal row)
  if (variant === 'buttons') {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`${
              currentLanguage === lang.code
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            } px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 flex items-center`}
          >
            {showFlags && <span className="mr-1">{lang.flag}</span>}
            {showNames && !compact && <span>{lang.name}</span>}
            {compact && <span>{lang.code.toUpperCase()}</span>}
          </button>
        ))}
      </div>
    );
  }

  // Select variant (native dropdown)
  if (variant === 'select') {
    return (
      <select
        value={currentLanguage}
        onChange={(e) => handleLanguageChange(e.target.value as Language)}
        className={`block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${className}`}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {showFlags ? `${lang.flag} ${lang.name}` : lang.name}
          </option>
        ))}
      </select>
    );
  }

  // Floating variant (fixed position)
  if (variant === 'floating') {
    return (
      <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-3 shadow-lg transition-colors duration-200 flex items-center"
            title="Change Language"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            {showFlags && (
              <span className="ml-2">{getLanguageFlag(currentLanguage)}</span>
            )}
          </button>

          {isOpen && (
            <div className="absolute bottom-full right-0 mb-2 w-64 bg-white rounded-lg shadow-xl border max-h-80 overflow-y-auto">
              <div className="p-2">
                <div className="grid grid-cols-2 gap-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`${
                        currentLanguage === lang.code
                          ? 'bg-indigo-100 text-indigo-800 border-indigo-300'
                          : 'text-gray-700 hover:bg-gray-50 border-transparent'
                      } p-2 rounded-md text-sm border transition-colors duration-200 flex items-center justify-center`}
                    >
                      {showFlags && <span className="mr-1 text-lg">{lang.flag}</span>}
                      <span className="text-xs">{lang.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default LanguageSwitcher;
