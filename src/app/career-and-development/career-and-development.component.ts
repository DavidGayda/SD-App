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


  featurette1 = {
    id: 1,
    header: 'Lilly U',
    body: 'Offers the development resources you need to learn, grow, and achieve personal and business goals',
    imageUrl: '../assets/images/LillyU-RedandBlack.png',
    href: 'http://mylilly.am.lilly.com/US/Employee/Pages/CareerandDev/LearnandDevelop/LillyUniversity.aspx',
  }

public isCollapsed = false;

banner = "../assets/images/CareerAndDevelopmentBanner.jpg";

images = ["../assets/images/CareerAndDevelopmentBanner.jpg", "../assets/images/LillyU-RedandBlack.png"];

featurettes = [{
  id: 1,
  header: 'Lilly U',
  body: 'Offers the development resources you need to learn, grow, and achieve personal and business goals',
  imageUrl: '../assets/images/LillyU-RedandBlack.png',
  href: 'http://mylilly.am.lilly.com/US/Employee/Pages/CareerandDev/LearnandDevelop/LillyUniversity.aspx',
},
{
  id: 2,
  header: 'MyPM',
  body: 'Integrated technology services that power innovation',
  imageUrl: '../assets/images/MyPM.PNG',
  href: 'http://mypm.lilly.com/',
},
{
  id: 3,
  header: 'MyPassword',
  body: 'Reset or Unlock your Account, Change Password, or Update your challenge Questions and Answers',
  imageUrl: '../assets/images/MyPassword.PNG',
  href: 'https://mypassword.lilly.com',
},
{
id: 4,
header: 'Lilly Classifieds',
body: 'With the new Lilly Classifieds, it’s easier than ever to place an ad and find what you’re looking for',
imageUrl: '../assets/images/LillyClassifieds.PNG',
href: 'http://classifieds.am.lilly.com/',
}];

    constructor() {


    }

    ngOnInit() {
    }


  }
  export interface Image {
    id: number;
    url: string;
  }
