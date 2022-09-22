import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as postComponents from './components/index';
import {PostComponent} from "./post.component";
import {PostRoutingModule} from "./post-routing.module";
import {LayoutModule} from "../../layout/layout.module";
import {NgxsModule} from "@ngxs/store";
import {PostState} from "./states/post.state";
import {RestService} from "@shared/services/module/rest.service";
import {PostService} from "@shared/services/module/post.service";

const components = [
  postComponents.PostListComponent,
  postComponents.PostFormComponent,
  postComponents.PostEditFormComponent,
  postComponents.PostNewFormComponent
];

@NgModule({
  declarations: [
    ...components,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    LayoutModule,
    NgxsModule.forFeature([PostState])
  ],
  providers: [
    RestService,
    PostService
  ],
})
export class PostModule {
}
