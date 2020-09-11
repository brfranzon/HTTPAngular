import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpGetModule } from  '../app/services/http-get.module';

import { AppComponent } from './app.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpGetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
