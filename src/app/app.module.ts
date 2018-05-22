import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopModule } from '../app/workshop/workshop.module';
import { AuthModule } from '../app/auth/auth.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    WorkshopModule,
    MatCardModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
