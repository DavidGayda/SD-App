import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { TabsetBasicComponent } from './tabset-basic/tabset-basic.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CareerAndDevelopmentComponent } from './career-and-development/career-and-development.component';
import { PayComponent } from './pay/pay.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { StaffingComponent } from './staffing/staffing.component';
import { EthicalConductComponent } from './ethical-conduct/ethical-conduct.component';
import { ToolsAndServicesComponent } from './tools-and-services/tools-and-services.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'  },
  { path: 'Home', component: DashboardComponent },
  { path: 'Career', component: CareerAndDevelopmentComponent },
  { path: 'Pay', component: PayComponent },
  { path: 'Benefits', component: BenefitsComponent },
  { path: 'Staffing', component: StaffingComponent },
  { path: 'EthicalConduct', component: EthicalConductComponent },
  { path: 'ToolsAndServices', component: ToolsAndServicesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TabsetBasicComponent,
    NavbarComponent,
    DashboardComponent,
    CareerAndDevelopmentComponent,
    PayComponent,
    BenefitsComponent,
    StaffingComponent,
    EthicalConductComponent,
    ToolsAndServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
