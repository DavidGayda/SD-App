import { Injectable } from '@angular/core';

import { Announcement } from './announcement';
import { ANNOUNCEMENTS } from './mock-announcements';

@Injectable()
export class AnnouncementsService {
  getAnnouncements(): Promise<Announcement[]> {
      return Promise.resolve(ANNOUNCEMENTS);
  }
  //
  // constructor() { }

}
