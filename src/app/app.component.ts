import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsetBasicComponent } from './tabset-basic/tabset-basic.component';
import { FeaturetteComponentComponent } from './featurette-component/featurette-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home Page';


}
