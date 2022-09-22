import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrivateLayoutComponent} from "./private-layout.component";

const routes: Routes = [
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      {
        path: 'post',
        loadChildren: () => import('./pages/post/post.module').then(m => m.PostModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule {
}
