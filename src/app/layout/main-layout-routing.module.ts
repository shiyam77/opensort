import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';

const routes: Routes = [
  {
    path: '', component: MainlayoutComponent, children: [
      { path: '', loadChildren: () => import('../pages/index/index-module.module').then(m => m.IndexModuleModule) },
      { path: 'main', loadChildren: () => import('../pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
