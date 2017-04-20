import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

createDb () {
  let announcements = [
    {id: 1, details: 'Announcement 1'},
    {id: 2, details: 'Announcement 2'},
    {id: 3, details: 'Announcement 3'},
    {id: 4, details: 'Announcement 4'},
    {id: 5, details: 'Announcement 5'}
  ];
  return {announcements};
}
  // constructor() { }

}
