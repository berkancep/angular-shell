import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as layoutComponents from './components';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

const components = [
  layoutComponents.HeaderComponent,
  layoutComponents.FooterComponent,
  layoutComponents.SidebarComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  exports: [
    ...components,
    ReactiveFormsModule,
    RouterModule
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class LayoutModule {
}
