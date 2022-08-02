import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"Login",
    loadChildren:()=> import('./User/user.module').then(m=>m.UserModule)
  },{
    path:"Dash",
    loadChildren:()=> import('./Dashboard/dashboard.module').then(m=>m.DashboardModule)
  },{
    path:"**",
    redirectTo:'Login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
