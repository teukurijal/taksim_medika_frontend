import React from 'react';
import { t } from '../../i18n/utils';
import type { Locale } from '../../i18n/translations';

interface HeroProps {
  currentLocale: Locale;
}

const Hero: React.FC<HeroProps> = ({ currentLocale }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {t(currentLocale, 'hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          {t(currentLocale, 'hero.subtitle')}
        </p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
          {t(currentLocale, 'hero.cta')}
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;