import { NgModule } from '@angular/core';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { SummaryComponent } from './summary/summary.component';
import { ComponentsModule } from './../shared/components/components.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../shared/services/data.service';

@NgModule({
  declarations: [
    PersonalInformationComponent,
    PhoneListComponent,
    SummaryComponent
  ],
  exports : [
    PersonalInformationComponent,
    PhoneListComponent,
    SummaryComponent
  ],
  imports: [
    ComponentsModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    DataService
  ]
})

export class ModulesModule {}
