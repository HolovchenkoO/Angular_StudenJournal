import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StudentJournalComponent} from "./student/studentJournal.component";
import {StudentJournalService} from "./student/studentJournalService";



@NgModule({
  declarations: [
    AppComponent,
    StudentJournalComponent
  ],
  imports: [
    BrowserModule,
        AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [StudentJournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
