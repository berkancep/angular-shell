import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from "./public-layout.component";
import * as pagesComponents from './pages/index';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'login',
        component: pagesComponents.LoginComponent
      },
      {
        path: 'forget-password',
        component: pagesComponents.ForgetPasswordComponent
      },
      {
        path: 'register',
        component: pagesComponents.ForgetPasswordComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {
}
