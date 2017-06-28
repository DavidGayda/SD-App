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
import { HomepageCarouselComponent } from './homepage-carousel/homepage-carousel.component';
import { QuickLinksComponentComponent } from './quick-links-component/quick-links-component.component';
import { LearningPlanDashboardComponentComponent } from './learning-plan-dashboard-component/learning-plan-dashboard-component.component';
import { MyMessagesModalComponentComponent } from './my-messages-modal-component/my-messages-modal-component.component';
import { FeaturetteComponentComponent } from './featurette-component/featurette-component.component';
import { NewsComponentComponent } from './news-component/news-component.component';
import { LeftFeaturetteComponent } from './left-featurette/left-featurette.component';
import { RightFeaturetteComponent } from './right-featurette/right-featurette.component';
 // import { DragulaModule} from '../../node_modules/ng2-dragula/ng2-dragula';
// import { DragulaService } from '../../node_modules/ng2-dragula/components/dragula.provider';
//
const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'  },
  { path: 'Home', component: DashboardComponent },
  { path: 'Career', component: CareerAndDevelopmentComponent },
  { path: 'Pay', component: PayComponent },
  { path: 'Benefits', component: BenefitsComponent },
  { path: 'Staffing', component: StaffingComponent },
  { path: 'EthicalConduct', component: EthicalConductComponent },
  { path: 'ToolsAndServices', component: ToolsAndServicesComponent },
  { path: 'SimpleSortableCopy', component: SimpleSortableCopyComponent },
  { path: 'News', component: NewsComponentComponent }
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
    SimpleSortableCopyComponent,
    HomepageCarouselComponent,
    QuickLinksComponentComponent,
    LearningPlanDashboardComponentComponent,
    MyMessagesModalComponentComponent,
    FeaturetteComponentComponent,
    NewsComponentComponent,
    LeftFeaturetteComponent,
    RightFeaturetteComponent
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
