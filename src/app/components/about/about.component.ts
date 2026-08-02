import { Component, computed, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly i18n = inject(I18nService);

  readonly professionalYears = computed(
    () => new Date().getFullYear() - this.i18n.profile.professionalStartYear
  );

  readonly details = computed(() => {
    const t = this.i18n.t().about;
    const p = this.i18n.profile;
    return [
      { label: t.name, value: p.fullName },
      { label: t.phone, value: p.phoneDisplay, href: p.phoneHref },
      { label: t.email, value: p.email, href: `mailto:${p.email}` },
      { label: t.location, value: p.location, href: p.locationUrl },
      { label: t.languagesLabel, value: t.languagesValue }
    ];
  });
}
