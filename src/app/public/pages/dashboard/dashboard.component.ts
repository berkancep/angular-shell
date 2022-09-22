import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
      <app-hero></app-hero>
      <app-feature-list></app-feature-list>
      <app-article-list></app-article-list>
  `
})
export class DashboardComponent {
}
