import { NgModule } from '@angular/core';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { SummaryComponent } from './summary/summary.component';

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
    ]
})

export class ModulesModule {}
