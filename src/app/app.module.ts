import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StudentJournalComponent} from "./components/studensJournal/studentJournal.component";
import {StudentJournalService} from "./components/studensJournal/studentJournalService";
import {MatListModule} from "@angular/material/list";
import {AdminComponent} from "./modules/admin/admin.component";
import {ErrorComponent} from "./components/error/error.component";
import {AdminModule} from "./modules/admin/admin.module";



@NgModule({
  declarations: [
    AppComponent,
    StudentJournalComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    AdminModule
  ],
  providers: [StudentJournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
