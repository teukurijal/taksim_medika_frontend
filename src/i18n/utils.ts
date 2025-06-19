import { translations, type Locale } from './translations';

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.id;
}

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = getTranslations(locale);
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, locale] = url.pathname.split('/');
  if (locale && (locale === 'en' || locale === 'id')) {
    return locale as Locale;
  }
  return 'id'; // default locale
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'id') {
    return path; // default locale doesn't need prefix
  }
  return `/${locale}${path}`;
}