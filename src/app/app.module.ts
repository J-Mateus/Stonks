import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Views/main/main.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResumoComponent } from './Views/resumo/resumo.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ResumoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CalendarModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
