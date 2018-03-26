import { NgModule } from '@angular/core';
import { DataSummaryComponent } from './data-summary/data-summary.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        DataSummaryComponent,
        FooterComponent
    ],
    exports: [
        DataSummaryComponent,
        FooterComponent
    ],
    imports: [
        FormsModule,
        CommonModule
    ]

})

export class ComponentsModule { }
