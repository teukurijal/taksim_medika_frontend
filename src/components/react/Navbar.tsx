import React, { useState } from 'react';
import { t, getLocaleFromUrl } from '../../i18n/utils';
import type { Locale } from '../../i18n/translations';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps {
  currentLocale: Locale;
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentLocale, currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">{t(currentLocale, 'hero.title')}</h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t(currentLocale, 'nav.home')}
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t(currentLocale, 'nav.about')}
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t(currentLocale, 'nav.services')}
              </a>
              <a href="#doctors" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t(currentLocale, 'nav.doctors')}
              </a>
              <a href="#location" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t(currentLocale, 'nav.location')}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t(currentLocale, 'nav.contact')}
              </a>
              <LanguageSwitcher currentLocale={currentLocale} currentPath={currentPath} />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                {t(currentLocale, 'hero.cta')}
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#home" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              {t(currentLocale, 'nav.home')}
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              {t(currentLocale, 'nav.about')}
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              {t(currentLocale, 'nav.services')}
            </a>
            <a href="#doctors" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              {t(currentLocale, 'nav.doctors')}
            </a>
            <a href="#location" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              {t(currentLocale, 'nav.location')}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              {t(currentLocale, 'nav.contact')}
            </a>
            <div className="px-3 py-2">
              <LanguageSwitcher currentLocale={currentLocale} currentPath={currentPath} />
            </div>
            <button className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors">
              {t(currentLocale, 'hero.cta')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;