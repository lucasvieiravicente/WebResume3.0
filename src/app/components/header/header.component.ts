import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { I18nService } from '../../services/i18n.service';
import { SkillsStateService } from '../../services/skills-state.service';
import { Lang } from '../../i18n/types';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly i18n = inject(I18nService);
  private readonly skillsState = inject(SkillsStateService);
  readonly menuOpen = signal(false);
  readonly langOpen = signal(false);
  readonly scrolled = signal(false);
  readonly activeSection = signal('home');

  readonly links = computed(() => {
    const t = this.i18n.t();
    const items = [
      { id: 'home', label: t.nav.home },
      { id: 'about', label: t.nav.about },
      { id: 'experience', label: t.nav.experience },
      { id: 'skills', label: t.nav.skills },
      { id: 'projects', label: t.nav.projects },
      { id: 'contact', label: t.nav.contact }
    ];

    return this.skillsState.available()
      ? items
      : items.filter((item) => item.id !== 'skills');
  });

  readonly currentLang = computed(() =>
    this.i18n.languages.find((item) => item.code === this.i18n.lang()) ?? this.i18n.languages[0]
  );

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
    this.updateActiveSection();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.lang-switcher')) {
      this.langOpen.set(false);
    }
  }

  scrollTo(id: string): void {
    this.menuOpen.set(false);
    this.langOpen.set(false);
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
    this.langOpen.set(false);
  }

  toggleLang(): void {
    this.langOpen.update((open) => !open);
  }

  selectLang(lang: Lang): void {
    this.i18n.setLang(lang);
    this.langOpen.set(false);
  }

  private updateActiveSection(): void {
    const offset = window.scrollY + 120;
    let current = 'home';
    for (const link of this.links()) {
      const el = document.getElementById(link.id);
      if (el && el.offsetTop <= offset) {
        current = link.id;
      }
    }
    this.activeSection.set(current);
  }
}
