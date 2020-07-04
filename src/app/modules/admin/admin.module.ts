import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AdminRoutingModule} from "./admin-routing.module";
import { HeaderComponent } from './shared/header/header.component';
import { LeftMenuComponent } from './shared/left-menu/left-menu.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    LeftMenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class AdminModule {
}
