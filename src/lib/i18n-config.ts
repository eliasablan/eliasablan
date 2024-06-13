export const i18n = {
  defaultLocale: 'en',
  locales: [
    'en',
    'es',
    // 'de', 'cs', 'fr', 'it', 'pt'
  ],
} as const

export type Locale = (typeof i18n)['locales'][number]

export const flagsAndLabels: {
  [key: string]: { flag: string; label: string }
} = {
  en: { flag: 'gb', label: 'English' },
  de: { flag: 'de', label: 'Deutsch' },
  cs: { flag: 'cz', label: 'Čeština' },
  es: { flag: 'es', label: 'Español' },
  fr: { flag: 'fr', label: 'Français' },
  it: { flag: 'it', label: 'Italiano' },
  pt: { flag: 'pt', label: 'Português' },
}
