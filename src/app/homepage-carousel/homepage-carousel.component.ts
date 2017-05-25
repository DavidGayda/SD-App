import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-homepage-carousel',
  templateUrl: './homepage-carousel.component.html',
  styleUrls: ['./homepage-carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomepageCarouselComponent implements OnInit {

images = ["../assets/images/lilly-moments/DaveRicks_0162_LowRes.jpg", "../assets/images/lilly-moments/DaveRicks_0162_LowRes.jpg"];

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
