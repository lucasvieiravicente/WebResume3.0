import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ApiService } from '../../services/api.service';
import { StackResponse } from '../../models/stack-response';
import { KnowledgeResponse } from '../../models/knowledge-response';
import { I18nService } from '../../services/i18n.service';
import { SkillsStateService } from '../../services/skills-state.service';
import { forkJoin, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

interface StackGroup {
  stack: StackResponse;
  knowledges: KnowledgeResponse[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  private readonly api = inject(ApiService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly skillsState = inject(SkillsStateService);
  readonly i18n = inject(I18nService);

  readonly groups = signal<StackGroup[]>([]);
  readonly loading = signal(true);
  readonly selected = signal<KnowledgeResponse | null>(null);

  readonly visible = computed(() => this.loading() || this.skillsState.available());

  ngOnInit(): void {
    this.api
      .getAllStacks()
      .pipe(
        switchMap((stacks) => {
          if (!stacks?.length) {
            return of([] as StackGroup[]);
          }
          return forkJoin(
            stacks.map((stack) =>
              this.api.getKnowledgeByStackId(stack.stackId).pipe(
                map((knowledges) => ({ stack, knowledges })),
                catchError(() => of({ stack, knowledges: [] as KnowledgeResponse[] }))
              )
            )
          );
        }),
        catchError(() => of([] as StackGroup[]))
      )
      .subscribe((groups) => {
        const loaded = groups.filter((g) => g.knowledges.length > 0);
        this.groups.set(loaded);
        this.skillsState.available.set(loaded.length > 0);
        this.loading.set(false);
      });
  }

  imageSrc(fileData: string[]): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64,${fileData}`);
  }

  openDetails(item: KnowledgeResponse): void {
    this.selected.set(item);
  }

  closeDetails(): void {
    this.selected.set(null);
  }
}
