import { Input, Component, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Announcement } from '../announcement';
import { AnnouncementsService } from '../announcements.service';
import { HomepageCarouselComponent } from '../homepage-carousel/homepage-carousel.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AnnouncementsService]
})
export class DashboardComponent implements OnInit {
  featurettes = [{
    id: 1,
    header: 'LillyPad',
    body: 'An official blog of Eli Lilly and Company',
    imageUrl: '../assets/images/LillyPad.png',
    href: 'https://lillypad.lilly.com/',
  },
  {
    id: 2,
    header: 'Service Now',
    body: 'Integrated technology services that power innovation',
    imageUrl: '../assets/images/ServiceNow.PNG',
    href: 'https://lilly.service-now.com/ess/main.do',
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

  @Input()
   public alerts: Array<IAlert> = [];

  public recentMessageAlert: Array<IAlert> = [];

  private backup: Array<IAlert>;

   announcements: Announcement [];

   constructor(private announcementsService: AnnouncementsService) {

}

  getAnnouncements(): void {
    this.announcementsService.getAnnouncements().then(announcements => this.announcements = announcements);


  //  this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
   //
  //  this.alerts.push({
  //    id: 11,
  //    type: 'info',
  //    message: 'okokokok',
  //  });

    // this.AnnouncementsService.getAnnouncements().then(announcements => this.announcements = announcements);
  }

  ngOnInit() {
     this.getAnnouncements();
        this.recentMessageAlert.push({
          id: 1,
          type: 'warning',
          message: 'You have new messages!',
        });

     setTimeout( () => {
       for (let announcement of this.announcements) {
         this.alerts.push({
           id: announcement.id,
           type: 'info',
           message: announcement.details,
         });
       }
     }, 100 );



  }

  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  public closeRecentMessageAlert(alert: IAlert) {
    const index: number = this.recentMessageAlert.indexOf(alert);
    this.recentMessageAlert.splice(index, 1);
  }

  public reset() {
     this.alerts = this.backup.map((alert: IAlert) => Object.assign({}, alert));
   }

  getAlert(index) {
    return this.alerts[index];
  }


}
export interface IAlert {
  id: number;
  type: string;
  message: string;
}
