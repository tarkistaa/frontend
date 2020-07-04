import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {RootComponent} from './components/root/root.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AdminModule} from "./modules/admin/admin.module";

@NgModule({
  declarations: [
    RootComponent,
    LoginPageComponent,
  ],
  exports: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {
}
