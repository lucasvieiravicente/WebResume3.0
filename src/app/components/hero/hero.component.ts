import { Component, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  readonly i18n = inject(I18nService);

  readonly socialMedias = [
    { url: this.i18n.profile.linkedin, icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
    { url: this.i18n.profile.github, icon: 'fab fa-github', label: 'GitHub' },
    { url: this.i18n.profile.whatsapp, icon: 'fab fa-whatsapp', label: 'WhatsApp' }
  ];

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}
