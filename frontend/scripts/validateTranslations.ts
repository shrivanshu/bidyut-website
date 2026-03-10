import { TranslationValidator } from '../src/utils/translationValidator';

console.log('translation validation starting');
try {
  const report = TranslationValidator.generateTranslationReport();
  console.log(report);
} catch (err) {
  console.error('Translation validation failed:', err);
  process.exit(1);
}
