import { Component, Input } from '@angular/core';
import { FeatureConfig } from "@shared/models";

@Component({
  selector: 'app-feature-list-item',
  template: `
      <div class="feature__icon">
          <img [src]="item.icon.src" [alt]="item.icon.alt">
      </div>
      <div class="feature__title">{{item.title}}</div>
      <div class="feature__description">{{item.description}}</div>
  `
})
export class FeatureListItemComponent {
  @Input() item: FeatureConfig;
}
