import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PersonalInformationComponent } from './modules/personal-information/personal-information.component';
import { PhoneListComponent } from './modules/phone-list/phone-list.component';
import { SummaryComponent } from './modules/summary/summary.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { DataSummaryComponent } from './shared/components/data-summary/data-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonalInformationComponent,
    PhoneListComponent,
    SummaryComponent,
    FooterComponent,
    DataSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
