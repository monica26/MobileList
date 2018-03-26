import { NgModule } from '@angular/core';
import { DataSummaryComponent } from './data-summary/data-summary.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        DataSummaryComponent,
        FooterComponent
    ],
    exports: [
        DataSummaryComponent,
        FooterComponent
    ]
})

export class ComponentsModule { }
