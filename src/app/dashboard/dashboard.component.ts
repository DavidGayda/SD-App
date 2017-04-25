import { Input, Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { AnnouncementsService } from '../announcements.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AnnouncementsService]
})
export class DashboardComponent implements OnInit {

  @Input()
   public alerts: Array<IAlert> = [];


  private backup: Array<IAlert>;

   announcements: Announcement [];

   constructor(private announcementsService: AnnouncementsService) {


    //  this.alerts.push({
    //   id: 1,
    //   type: 'success',
    //   message: 'This is an success alert',
    // }, {
    //   id: 2,
    //   type: 'info',
    //   message: 'This is an info alert',
    // }, {
    //   id: 3,
    //   type: 'warning',
    //   message: 'This is a warning alert',
    // }, {
    //   id: 4,
    //   type: 'danger',
    //   message: 'This is a danger alert',
    // });

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

     setTimeout( () => {
       for (let announcement of this.announcements) {
         this.alerts.push({
           id: announcement.id,
           type: 'info',
           message: announcement.details,
         });
       }
     }, 0 );


  }

  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
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
