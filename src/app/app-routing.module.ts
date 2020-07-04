import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {DashboardComponent} from "./modules/admin/components/dashboard/dashboard.component";


const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
