import { en } from '../locales/en';
import { hi } from '../locales/hi';
import { bn } from '../locales/bn';
import { ja } from '../locales/ja';
import { mr } from '../locales/mr';
import { gu } from '../locales/gu';
import { ta } from '../locales/ta';
import { te } from '../locales/te';
import { kn } from '../locales/kn';
import { ru } from '../locales/ru';
import { zh } from '../locales/zh';

interface ValidationResult {
  language: string;
  missingKeys: string[];
  emptyValues: string[];
  completeness: number;
  priority: 'high' | 'medium' | 'low';
}

const allLanguages = {
  en, hi, bn, ja, mr, gu, ta, te, kn, ru, zh
};

// Critical keys that must be translated for core functionality
const CRITICAL_KEYS = [
  'home', 'aboutUs', 'contact', 'school', 'robots',
  'learnRobotics', 'heroDescription', 'scheduleDemoCall',
  'getInTouch', 'sendMessage', 'ourOfferings'
];

// Technical keys that need domain expertise
const TECHNICAL_KEYS = [
  'robotDevelopment', 'aiSolutions', 'automation', 'roboticsLabs',
  'streamEducation', 'advancedLms', 'personalizedLearningPaths'
];

export class TranslationValidator {
  static validateAllLanguages(): ValidationResult[] {
    const baseKeys = Object.keys(en);
    const results: ValidationResult[] = [];

    Object.entries(allLanguages).forEach(([langCode, translations]) => {
      if (langCode === 'en') return; // Skip English as it's the base

      const missingKeys = baseKeys.filter(key => !(key in translations));
      const emptyValues = Object.entries(translations)
        .filter(([_, value]) => !value || value.trim() === '')
        .map(([key, _]) => key);

      const completeness = Math.round(
        ((baseKeys.length - missingKeys.length) / baseKeys.length) * 100
      );

      // Determine priority based on missing critical keys
      const missingCritical = missingKeys.filter(key => CRITICAL_KEYS.includes(key));
      const priority = missingCritical.length > 0 ? 'high' : 
                     missingKeys.length > 10 ? 'medium' : 'low';

      results.push({
        language: langCode,
        missingKeys,
        emptyValues,
        completeness,
        priority
      });
    });

    return results.sort((a, b) => {
      // Sort by priority, then by completeness
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      }
      return a.completeness - b.completeness;
    });
  }

  static generateTranslationReport(): string {
    const results = this.validateAllLanguages();
    const languageNames = {
      hi: 'Hindi', bn: 'Bengali', ja: 'Japanese', mr: 'Marathi',
      gu: 'Gujarati', ta: 'Tamil', te: 'Telugu', kn: 'Kannada',
      ru: 'Russian', zh: 'Chinese'
    };

    let report = '# Translation Completeness Report\n\n';
    report += `Generated: ${new Date().toISOString()}\n\n`;

    // Summary
    const totalLanguages = results.length;
    const completeLanguages = results.filter(r => r.completeness === 100).length;
    const averageCompleteness = Math.round(
      results.reduce((sum, r) => sum + r.completeness, 0) / totalLanguages
    );

    report += '## Summary\n';
    report += `- **Total Languages**: ${totalLanguages}\n`;
    report += `- **Fully Complete**: ${completeLanguages}/${totalLanguages}\n`;
    report += `- **Average Completeness**: ${averageCompleteness}%\n\n`;

    // High priority languages
    const highPriority = results.filter(r => r.priority === 'high');
    if (highPriority.length > 0) {
      report += '## 🚨 High Priority (Missing Critical Keys)\n';
      highPriority.forEach(result => {
        const missing = result.missingKeys.filter(k => CRITICAL_KEYS.includes(k));
        report += `- **${languageNames[result.language as keyof typeof languageNames]}**: ${result.completeness}% complete, missing: ${missing.join(', ')}\n`;
      });
      report += '\n';
    }

    // Detailed breakdown
    report += '## Detailed Breakdown\n\n';
    results.forEach(result => {
      const langName = languageNames[result.language as keyof typeof languageNames];
      const statusEmoji = result.completeness === 100 ? '✅' : 
                         result.completeness >= 80 ? '🟡' : '🔴';
      
      report += `### ${statusEmoji} ${langName} (${result.completeness}%)\n`;
      
      if (result.missingKeys.length > 0) {
        report += `**Missing Keys (${result.missingKeys.length}):**\n`;
        const critical = result.missingKeys.filter(k => CRITICAL_KEYS.includes(k));
        const technical = result.missingKeys.filter(k => TECHNICAL_KEYS.includes(k));
        const other = result.missingKeys.filter(k => !CRITICAL_KEYS.includes(k) && !TECHNICAL_KEYS.includes(k));
        
        if (critical.length > 0) {
          report += `- 🚨 Critical: ${critical.join(', ')}\n`;
        }
        if (technical.length > 0) {
          report += `- 🔧 Technical: ${technical.join(', ')}\n`;
        }
        if (other.length > 0) {
          report += `- 📄 Other: ${other.slice(0, 5).join(', ')}${other.length > 5 ? ` (+${other.length - 5} more)` : ''}\n`;
        }
      }
      
      if (result.emptyValues.length > 0) {
        report += `**Empty Values (${result.emptyValues.length}):** ${result.emptyValues.slice(0, 3).join(', ')}${result.emptyValues.length > 3 ? ` (+${result.emptyValues.length - 3} more)` : ''}\n`;
      }
      
      report += '\n';
    });

    // Action items
    report += '## Recommended Actions\n\n';
    report += '1. **Immediate**: Fix high-priority languages with missing critical keys\n';
    report += '2. **This Week**: Complete languages above 80% completion\n';
    report += '3. **Next Week**: Focus on technical terminology consistency\n';
    report += '4. **Ongoing**: Set up professional review process\n\n';

    return report;
  }

  // Helper method to get missing keys for a specific language
  static getMissingKeysForLanguage(langCode: string): string[] {
    const baseKeys = Object.keys(en);
    const targetLang = allLanguages[langCode as keyof typeof allLanguages];
    
    if (!targetLang) return [];
    
    return baseKeys.filter(key => !(key in targetLang));
  }

  // Generate CSV for professional translators
  static generateCSVForTranslators(langCode: string): string {
    const missingKeys = this.getMissingKeysForLanguage(langCode);
    const header = 'Key,English Text,Context,Priority,Domain\n';
    
    const rows = missingKeys.map(key => {
      const englishText = (en as any)[key] || '';
      const isCritical = CRITICAL_KEYS.includes(key);
      const isTechnical = TECHNICAL_KEYS.includes(key);
      
      const priority = isCritical ? 'High' : isTechnical ? 'Medium' : 'Low';
      const domain = isTechnical ? 'Technical' : 
                    key.includes('hero') || key.includes('description') ? 'Marketing' : 'UI';
      
      return `"${key}","${englishText.replace(/"/g, '""')}","","${priority}","${domain}"`;
    }).join('\n');
    
    return header + rows;
  }
}

// Export for use in development tools
if (typeof window !== 'undefined') {
  (window as any).TranslationValidator = TranslationValidator;
}