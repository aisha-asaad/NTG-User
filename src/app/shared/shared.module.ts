import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SelectComponent,
    SpinnerComponent, 
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    SelectComponent, 
    SpinnerComponent,
    FormsModule
  ]
})
export class SharedModule { }
