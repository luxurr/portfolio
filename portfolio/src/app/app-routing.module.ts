import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardianGuard } from './modules/guards/guardian.guard';

const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', loadChildren: () => import('./modules/pages/pages-routing.module').then(m => m.PagesRoutingModule)},
  // {path:'home', canActivate: [], loadChildren:() => import('./modules/pages/app-module.module').then(m => m.AppModuleModule)},
  {path:'login', canActivate: [], loadChildren:() => import('./modules/pages/login/login.module').then(m => m.LoginModule)},
  {path:'admin', canActivate: [GuardianGuard], loadChildren:() => import('./modules/pages/admin/admin.module').then(m => m.AdminModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
