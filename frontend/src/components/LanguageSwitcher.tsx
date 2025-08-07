import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, Language } from '../contexts/OptimizedLanguageContext';

interface LanguageSwitcherProps {
  variant?: 'dropdown' | 'buttons' | 'select';
  showFlag?: boolean;
  showName?: boolean;
  className?: string;
  buttonClassName?: string;
  dropdownClassName?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'dropdown',
  showFlag = true,
  showName = true,
  className = '',
  buttonClassName = '',
  dropdownClassName = ''
}) => {
  const { currentLanguage, changeLanguage, getLanguageName, getLanguageFlag, getSupportedLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const languages = getSupportedLanguages();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (lang: Language) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  const renderLanguageLabel = (lang: Language, isActive = false) => {
    const flag = getLanguageFlag(lang);
    const name = getLanguageName(lang);
    
    return (
      <span className={`flex items-center gap-2 ${isActive ? 'font-medium' : ''}`}>
        {showFlag && <span className="text-lg">{flag}</span>}
        {showName && <span>{name}</span>}
      </span>
    );
  };

  if (variant === 'buttons') {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        {languages.map(({ code }) => (
          <button
            key={code}
            onClick={() => handleLanguageChange(code)}
            className={`
              px-3 py-2 rounded-md border transition-colors duration-200
              ${currentLanguage === code 
                ? 'bg-blue-600 text-white border-blue-600' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }
              ${buttonClassName}
            `}
          >
            {renderLanguageLabel(code, currentLanguage === code)}
          </button>
        ))}
      </div>
    );
  }

  if (variant === 'select') {
    return (
      <div className={className}>
        <select
          value={currentLanguage}
          onChange={(e) => handleLanguageChange(e.target.value as Language)}
          className={`
            px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            ${dropdownClassName}
          `}
        >
          {languages.map(({ code, name, flag }) => (
            <option key={code} value={code}>
              {showFlag && flag} {showName && name}
            </option>
          ))}
        </select>
      </div>
    );
  }

  // Default dropdown variant
  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700
          hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          transition-colors duration-200
          ${buttonClassName}
        `}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {renderLanguageLabel(currentLanguage)}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className={`
          absolute top-full left-0 mt-1 w-full min-w-[200px] bg-white border border-gray-300 
          rounded-md shadow-lg z-50 max-h-60 overflow-y-auto
          ${dropdownClassName}
        `}>
          {languages.map(({ code }) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code)}
              className={`
                w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-150
                ${currentLanguage === code ? 'bg-blue-50 text-blue-700' : 'text-gray-700'}
                first:rounded-t-md last:rounded-b-md
              `}
              role="option"
              aria-selected={currentLanguage === code}
            >
              {renderLanguageLabel(code, currentLanguage === code)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Floating language switcher for corner positioning
export const FloatingLanguageSwitcher: React.FC<{
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  className?: string;
}> = ({ position = 'top-right', className = '' }) => {
  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4', 
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4'
  };

  return (
    <div className={`fixed z-50 ${positionClasses[position]} ${className}`}>
      <LanguageSwitcher
        variant="dropdown"
        showFlag={true}
        showName={false}
        className="shadow-lg"
      />
    </div>
  );
};
