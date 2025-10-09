// Professional Translation Management System
export interface TranslationEntry {
  key: string;
  english: string;
  context?: string;
  domain?: 'technical' | 'marketing' | 'ui' | 'educational';
  approved?: boolean;
  needsReview?: boolean;
}

export interface LanguageQuality {
  lang: string;
  completeness: number; // 0-100%
  accuracy: number;     // 0-100%
  reviewed: boolean;
}

export class TranslationManager {
  private static instance: TranslationManager;
  private translations: Map<string, TranslationEntry> = new Map();
  private qualityMetrics: Map<string, LanguageQuality> = new Map();

  static getInstance(): TranslationManager {
    if (!TranslationManager.instance) {
      TranslationManager.instance = new TranslationManager();
    }
    return TranslationManager.instance;
  }

  // Add a translation entry for review
  addEntry(entry: TranslationEntry): void {
    this.translations.set(entry.key, entry);
  }

  // Get translations that need professional review
  getEntriesNeedingReview(domain?: string): TranslationEntry[] {
    return Array.from(this.translations.values())
      .filter(entry => entry.needsReview && (!domain || entry.domain === domain));
  }

  // Generate translation report for professional translators
  generateTranslationReport(): {
    totalKeys: number;
    byDomain: Record<string, number>;
    needingReview: number;
    priority: TranslationEntry[];
  } {
    const entries = Array.from(this.translations.values());
    const byDomain: Record<string, number> = {};
    
    entries.forEach(entry => {
      const domain = entry.domain || 'general';
      byDomain[domain] = (byDomain[domain] || 0) + 1;
    });

    // Priority: technical and marketing content first
    const priority = entries
      .filter(entry => ['technical', 'marketing'].includes(entry.domain || ''))
      .sort((a, b) => (a.domain === 'technical' ? -1 : 1));

    return {
      totalKeys: entries.length,
      byDomain,
      needingReview: entries.filter(e => e.needsReview).length,
      priority
    };
  }

  // Quality assessment for each language
  assessLanguageQuality(langCode: string): LanguageQuality {
    // This would integrate with professional translation services
    return this.qualityMetrics.get(langCode) || {
      lang: langCode,
      completeness: 0,
      accuracy: 0,
      reviewed: false
    };
  }
}

// Professional Translation Service Integration
export class ProfessionalTranslationService {
  private static readonly SUPPORTED_SERVICES = {
    LOKALISE: 'lokalise',
    CROWDIN: 'crowdin',
    PHRASE: 'phrase',
    TRANSIFEX: 'transifex'
  };

  // Generate files for professional translation services
  static exportForTranslation(format: 'json' | 'csv' | 'xliff' = 'json'): string {
    const manager = TranslationManager.getInstance();
    const entries = manager.getEntriesNeedingReview();

    if (format === 'csv') {
      return this.generateCSV(entries);
    } else if (format === 'xliff') {
      return this.generateXLIFF(entries);
    }
    
    return JSON.stringify(entries, null, 2);
  }

  private static generateCSV(entries: TranslationEntry[]): string {
    const header = 'Key,English,Context,Domain,Priority\n';
    const rows = entries.map(entry => 
      `"${entry.key}","${entry.english}","${entry.context || ''}","${entry.domain || 'general'}","${entry.domain === 'technical' ? 'High' : 'Medium'}"`
    ).join('\n');
    
    return header + rows;
  }

  private static generateXLIFF(entries: TranslationEntry[]): string {
    // XLIFF format for professional CAT tools
    return `<?xml version="1.0" encoding="UTF-8"?>
<xliff version="1.2">
  <file source-language="en" target-language="hi" datatype="plaintext">
    <body>
      ${entries.map(entry => `
      <trans-unit id="${entry.key}">
        <source>${entry.english}</source>
        <note>${entry.context || ''}</note>
      </trans-unit>`).join('')}
    </body>
  </file>
</xliff>`;
  }
}

// Domain-specific terminology management
export const ROBOTICS_TERMINOLOGY = {
  'robotics': {
    en: 'Robotics',
    hi: 'रोबोटिक्स',
    technical: true
  },
  'artificial_intelligence': {
    en: 'Artificial Intelligence',
    hi: 'कृत्रिम बुद्धिमत्ता',
    technical: true
  },
  'automation': {
    en: 'Automation',
    hi: 'स्वचालन',
    technical: true
  },
  'stem_education': {
    en: 'STEM Education',
    hi: 'STEM शिक्षा',
    technical: true
  },
  'hands_on_learning': {
    en: 'Hands-on Learning',
    hi: 'व्यावहारिक अधिगम',
    educational: true
  }
};