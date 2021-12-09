import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MesesComponent } from './meses/meses.component';
import { DiasComponent } from './dias/dias.component';
import { FloresComponent } from './flores/flores.component';
import { ComidasComponent } from './comidas/comidas.component';
import { NombresComponent } from './nombres/nombres.component';

@NgModule({
  declarations: [
    AppComponent,
    MesesComponent,
    DiasComponent,
    FloresComponent,
    ComidasComponent,
    NombresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
