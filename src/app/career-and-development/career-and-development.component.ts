import { Component, OnInit } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
// import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-career-and-development',
  templateUrl: './career-and-development.component.html',
  styleUrls: ['./career-and-development.component.css']
})
export class CareerAndDevelopmentComponent implements OnInit {

 public isCollapsed = false;

  // public beforeChange($event: NgbPanelChangeEvent) {
  //
  //    if ($event.panelId === 'preventchange-2') {
  //      $event.preventDefault();
  //    }
  //
  //    if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
  //      $event.preventDefault();
  //    }
  //  };
  constructor() { }

  ngOnInit() {
  }

}
