import 'reflect-metadata';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrudTableModule } from './crud-table/crud-table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CrudTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
