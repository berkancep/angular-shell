import { Component } from '@angular/core';
import { ArticleConfig } from "@shared/models";

@Component({
  selector: 'app-article-list',
  template: `
      <section class="article">
          <div class="article__content container container--pall">
              <h2>Latest Articles</h2>
              <div class="article__grid">
                  <ng-container *ngFor="let item of articleItes">
                      <app-article-list-item class="article__item" [item]="item"></app-article-list-item>
                  </ng-container>
              </div>
          </div>
      </section>`
})
export class ArticleListComponent {
  articleItes: ArticleConfig[] = [
    {
      author: 'Berkan Çep',
      title: 'Angular Lifecycle Hooks',
      description: 'In its simplest form, Lifecycle refers to the lifecycle of Components.',
      link: {
        src: 'https://berkancep.medium.com/angular-lifecycle-hooks-52a2720fbfb4',
        target: '_blank'
      },
      icon: {
        src: 'https://wuschools.com/wp-content/uploads/2019/12/lifecycle.jpg',
        alt: 'Lifecycle'
      }
    },
    {
      author: 'Berkan Çep',
      title: 'Angular Lifecycle Hooks',
      description: 'In its simplest form, Lifecycle refers to the lifecycle of Components.',
      link: {
        src: 'https://berkancep.medium.com/angular-lifecycle-hooks-52a2720fbfb4',
        target: '_blank'
      },
      icon: {
        src: 'https://wuschools.com/wp-content/uploads/2019/12/lifecycle.jpg',
        alt: 'Lifecycle'
      }
    },
    {
      author: 'Berkan Çep',
      title: 'Angular Lifecycle Hooks',
      description: 'In its simplest form, Lifecycle refers to the lifecycle of Components.',
      link: {
        src: 'https://berkancep.medium.com/angular-lifecycle-hooks-52a2720fbfb4',
        target: '_blank'
      },
      icon: {
        src: 'https://wuschools.com/wp-content/uploads/2019/12/lifecycle.jpg',
        alt: 'Lifecycle'
      }
    },
    {
      author: 'Berkan Çep',
      title: 'Angular Lifecycle Hooks',
      description: 'In its simplest form, Lifecycle refers to the lifecycle of Components.',
      link: {
        src: 'https://berkancep.medium.com/angular-lifecycle-hooks-52a2720fbfb4',
        target: '_blank'
      },
      icon: {
        src: 'https://wuschools.com/wp-content/uploads/2019/12/lifecycle.jpg',
        alt: 'Lifecycle'
      }
    },
  ]
}
