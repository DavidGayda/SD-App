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

     setTimeout( () => {
       for (let announcement of this.announcements) {
         this.alerts.push({
           id: announcement.id,
           type: 'info',
           message: announcement.details,
         });
       }
     }, 0 );


     this.recentMessageAlert.push({
       id: 1,
       type: 'warning',
       message: 'You have new messages!',
     });

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
