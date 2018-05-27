import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ComunicationcdhModule } from './comunicationcdh/comunicationcdh.module';
/*import { ThemeModule } from './@theme/theme.module';*/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComunicationcdhModule,
     /*ThemeModule*/
    ],
    exports: [
      /*ThemeModule*/
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
