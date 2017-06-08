import { Component, OnInit } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
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
  images = ["../assets/images/lilly-moments/collaboration_REVeli_002.Smaller.jpg", "../assets/images/LillyU-RedandBlack.png"];

   //   announcements: Announcement [];
   //images = [];
      // {id : 2,
      //   imageUrl: "../assets/images/lilly-moments/DaveRicks_0162_LowRes.jpg"},
      // { id : 3,
      //     imageUrl: "../assets/images/lilly-moments/DaveRicks_0162_LowRes.jpg"}
      //   ];

    constructor() {


    }

    ngOnInit() {
    }


  }
  export interface Image {
    id: number;
    url: string;
  }
