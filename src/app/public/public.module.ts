import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicLayoutComponent} from "./public-layout.component";
import * as pagesComponents from './pages/index';
import {LayoutModule} from "./layout/layout.module";
import {PublicRoutingModule} from "./public-routing.module";

const components = [
  pagesComponents.LoginComponent,
  pagesComponents.ForgetPasswordComponent,
  pagesComponents.RegisterComponent,
];

@NgModule({
  declarations: [
    ...components,
    PublicLayoutComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    PublicRoutingModule
  ]
})
export class PublicModule {
}
