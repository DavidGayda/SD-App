import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-sortable-copy',
  templateUrl: './simple-sortable-copy.component.html',
  styleUrls: ['./simple-sortable-copy.component.css', '../../../node_modules/ng2-dnd-master/style.css']
})
export class SimpleSortableCopyComponent implements OnInit {

  dragOperation: boolean = false;

      containers: Array<Container> = [
          new Container(1, 'Container 1', [new Widget('1'), new Widget('2')]),
          new Container(2, 'Container 2', [new Widget('3'), new Widget('4')]),
          new Container(3, 'Container 3', [new Widget('5'), new Widget('6')])
      ];

      widgets: Array<Widget> = [new Widget('1'), new Widget('2')];
      addTo($event: any) {
          if ($event) {
              this.widgets.push($event.dragData);
          }
      }

  // constructor() { }

  ngOnInit() {
  }

}

class Container {
  constructor(public id: number, public name: string, public widgets: Array<Widget>) {}
}


class Widget {
  constructor(public name: string) {}
}
