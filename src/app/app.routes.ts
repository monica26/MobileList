import {Routes, RouterModule} from '@angular/router';
import { PersonalInformationComponent } from './modules/personal-information/personal-information.component';
import { PhoneListComponent } from './modules/phone-list/phone-list.component';
import { SummaryComponent } from './modules/summary/summary.component';

const appRoutes: Routes = [
    {path: 'personal-information', component: PersonalInformationComponent, data: { titulo: 'Personal Information'} },
    {path: 'phone-list', component: PhoneListComponent, data: { titulo: 'Phone List'} },
    {path: 'summary', component: SummaryComponent, data: { titulo: 'Summary'} },
    {path: '', redirectTo: '/personal-information', pathMatch: 'full' }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
