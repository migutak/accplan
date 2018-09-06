import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { ProblemdefinitionComponent } from './problemdefinition/problemdefinition.component';
import { PtpComponent } from './ptp/ptp.component';
import { ActionsComponent } from './actions/actions.component';

import {AtomSpinnerModule} from 'angular-epic-spinners';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    FacilitiesComponent,
    ProblemdefinitionComponent,
    PtpComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AtomSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
