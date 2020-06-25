import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { StartPageComponent } from './components/start-page/start-page.component';
import { RootComponent } from './components/root/root.component';

@NgModule({
  declarations: [
    StartPageComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [StartPageComponent]
})
export class AppModule { }
