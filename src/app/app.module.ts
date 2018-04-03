import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

// Modulos
import { ComponentsModule } from './shared/components/components.module';
import { ModulesModule } from './modules/modules.module';
import { APP_ROUTES } from './app.routes';
import { DataService } from './shared/services/data.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModulesModule,
    ComponentsModule,
    APP_ROUTES,
    FormsModule,
    CommonModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
