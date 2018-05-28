import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopModule } from '../app/workshop/workshop.module';
import { AuthModule } from '../app/auth/auth.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {MenuComponent} from '../app/apex/menu/menu.component';
import {ApexService} from '../app/apex/apex/apex.service'
import {
  MatFormFieldModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatSelectModule,
  MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule,
  MatGridListModule, MatCardModule, MatExpansionModule,
  MatButtonModule, MatChipsModule, MatIconModule, MatAutocompleteModule,
  MatTooltipModule, MatSnackBarModule,
} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
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
    MatSidenavModule,
    MatIconModule,
    MatListModule
    
  ],
  providers: [ApexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
