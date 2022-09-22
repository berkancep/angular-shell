import { Component, Input } from '@angular/core';
import { ArticleConfig } from "@shared/models";

@Component({
  selector: 'app-article-list-item',
  template: `
      <a [href]="item.link.src" [target]="item.link.target">
          <div class="article__image" style="background-image: url({{item.icon.src}})"></div>
          <div class="article__text">
              <div class="article__author">{{item.author}}</div>
              <div class="article__title">{{item.title}}</div>
              <div class="article__description">{{item.description}}
              </div>
          </div>
      </a>
  `
})
export class ArticleListItemComponent {
  @Input() item: ArticleConfig;
}
