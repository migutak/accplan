import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileSelectDirective } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { ProblemdefinitionComponent } from './problemdefinition/problemdefinition.component';
import { ActionsComponent } from './actions/actions.component';

import {AtomSpinnerModule} from 'angular-epic-spinners';
import {HttpClientModule} from '@angular/common/http';
import { SwotComponent } from './swot/swot.component';
import { AbilitytopayComponent } from './abilitytopay/abilitytopay.component';
import { CustomerproposalComponent } from './customerproposal/customerproposal.component';
import { PaymentplanComponent } from './paymentplan/paymentplan.component';
import { RemedialofferingsComponent } from './remedialofferings/remedialofferings.component';
import { CollectionsComponent } from './collections/collections.component';

import { BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    FacilitiesComponent,
    ProblemdefinitionComponent,
    ActionsComponent,
    SwotComponent,
    AbilitytopayComponent,
    CustomerproposalComponent,
    PaymentplanComponent,
    RemedialofferingsComponent,
    CollectionsComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AtomSpinnerModule,
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
