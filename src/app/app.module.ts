import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { GeoFormComponent } from './geo-form/geo-form.component';
import { ReverseGeoComponent } from './reverse-geo/reverse-geo.component';

@NgModule({
  declarations: [
    AppComponent,
    GeoFormComponent,
    ReverseGeoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
