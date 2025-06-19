import React from 'react';
import { getLocalizedPath } from '../../i18n/utils';
import type { Locale } from '../../i18n/translations';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  currentPath: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLocale, currentPath }) => {
  const languages = [
    { code: 'id' as Locale, name: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'en' as Locale, name: 'English', flag: '🇺🇸' }
  ];

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">
        <span>{languages.find(lang => lang.code === currentLocale)?.flag}</span>
        <span className="text-sm font-medium">
          {languages.find(lang => lang.code === currentLocale)?.name}
        </span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <a
            key={lang.code}
            href={getLocalizedPath(currentPath, lang.code)}
            className={`flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors ${
              currentLocale === lang.code ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="font-medium">{lang.name}</span>
            {currentLocale === lang.code && (
              <svg className="w-4 h-4 ml-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;