import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { AnnouncementsService } from '../announcements.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AnnouncementsService]
})
export class DashboardComponent implements OnInit {

   announcements: Announcement [];
   constructor(private announcementsService: AnnouncementsService) { }

  getAnnouncements(): void {
    this.announcementsService.getAnnouncements().then(announcements => this.announcements = announcements);
    // this.AnnouncementsService.getAnnouncements().then(announcements => this.announcements = announcements);
  }

  ngOnInit() {
     this.getAnnouncements();
  }

}
