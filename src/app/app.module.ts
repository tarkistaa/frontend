import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {StartPageComponent} from './components/start-page/start-page.component';
import {RootComponent} from './components/root/root.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    RootComponent,
    StartPageComponent,
  ],
  exports: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {
}
