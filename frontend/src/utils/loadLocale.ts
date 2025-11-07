// Utility function to dynamically load locale files
export async function loadLocale(locale: string) {
  try {
    const module = await import(`../locales/${locale}.ts`);
    return module.default;
  } catch (error) {
    console.error(`Failed to load locale: ${locale}`, error);
    // Fallback to English if locale loading fails
    const fallback = await import('../locales/en.ts');
    return fallback.default;
  }
}