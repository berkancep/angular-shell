import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as postComponents from './components/index';
import { PostComponent } from './post.component';
import { LeavePageGuard } from "@shared/guards/leave-page.guard";

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
    children: [
      {
        path: '',
        component: postComponents.PostListComponent
      },
      {
        path: 'create',
        component: postComponents.PostNewFormComponent,
        canDeactivate: [LeavePageGuard]
      },
      {
        path: 'edit/:id',
        component: postComponents.PostEditFormComponent,
        canDeactivate: [LeavePageGuard]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
