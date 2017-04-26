import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { DndModule } from 'ng2-dnd-master';

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
import { SimpleSortableCopyComponent } from './simple-sortable-copy/simple-sortable-copy.component';
 // import { DragulaModule} from '../../node_modules/ng2-dragula/ng2-dragula';
// import { DragulaService } from '../../node_modules/ng2-dragula/components/dragula.provider';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'  },
  { path: 'Home', component: DashboardComponent },
  { path: 'Career', component: CareerAndDevelopmentComponent },
  { path: 'Pay', component: PayComponent },
  { path: 'Benefits', component: BenefitsComponent },
  { path: 'Staffing', component: StaffingComponent },
  { path: 'EthicalConduct', component: EthicalConductComponent },
  { path: 'ToolsAndServices', component: ToolsAndServicesComponent },
  { path: 'SimpleSortableCopy', component: SimpleSortableCopyComponent }
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
    ToolsAndServicesComponent,
    SimpleSortableCopyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    NgbAccordionModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
