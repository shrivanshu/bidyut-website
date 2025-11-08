// Utility function to dynamically load locale files
type LocaleData = Record<string, string>;

type LocaleModule = {
  default?: LocaleData;
} & Record<string, LocaleData | undefined>;

export async function loadLocale(locale: string): Promise<LocaleData> {
  try {
    const module = (await import(`../locales/${locale}.ts`)) as LocaleModule;
    const localeData = module[locale] ?? module.default;
    if (localeData) {
      return localeData;
    }
  } catch (error) {
    console.error(`Failed to load locale: ${locale}`, error);
  }

  const fallback = (await import('../locales/en.ts')) as LocaleModule;
  const fallbackData = fallback.en ?? fallback.default;
  if (fallbackData) {
    return fallbackData;
  }

  throw new Error('Missing locale data');
}
