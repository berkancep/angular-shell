import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as layoutComponents from './components';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "@shared/shared.module";
import { NgxsModule } from "@ngxs/store";
import { HeaderState } from "./components/header/states";

const components = [
  layoutComponents.HeaderComponent,
  layoutComponents.FooterComponent,
]

@NgModule({
  declarations: [
    ...components
  ],
  exports: [
    ...components,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    NgxsModule.forFeature([HeaderState])
  ]
})
export class LayoutModule {
}
