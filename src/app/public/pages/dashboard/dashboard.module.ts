import { NgModule } from '@angular/core';
import { FeatureListComponent } from "./pages/feature/feature-list/feature-list.component";
import { FeatureListItemComponent } from "./pages/feature/feature-list/feature-list-item/feature-list-item.component";
import { HeroComponent } from "./pages/hero/hero.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { CommonModule } from "@angular/common";
import { ArticleListComponent } from "./pages/article/article-list/article-list.component";
import { ArticleListItemComponent } from "./pages/article/article-list/article-list-item/article-list-item.component";


@NgModule({
  declarations: [
    DashboardComponent,
    FeatureListComponent,
    FeatureListItemComponent,
    ArticleListComponent,
    ArticleListItemComponent,
    HeroComponent
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
  ]
})
export class DashboardModule {
}
