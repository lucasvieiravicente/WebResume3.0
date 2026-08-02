import { Injectable, computed, signal } from '@angular/core';
import { translations } from '../i18n/translations';
import { Lang, PROFILE, Translations } from '../i18n/types';

const STORAGE_KEY = 'web-resume-lang';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private readonly langSignal = signal<Lang>(this.readInitialLang());

  readonly lang = this.langSignal.asReadonly();
  readonly t = computed<Translations>(() => translations[this.langSignal()]);
  readonly profile = PROFILE;

  readonly languages: { code: Lang; flagSrc: string; labelKey: keyof Translations['lang'] }[] = [
    { code: 'pt', flagSrc: 'assets/flags/br.svg', labelKey: 'pt' },
    { code: 'en', flagSrc: 'assets/flags/gb.svg', labelKey: 'en' },
    { code: 'es', flagSrc: 'assets/flags/es.svg', labelKey: 'es' }
  ];

  setLang(lang: Lang): void {
    this.langSignal.set(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
  }

  private readInitialLang(): Lang {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'pt' || saved === 'en' || saved === 'es') {
      return saved;
    }
    return 'pt';
  }
}
