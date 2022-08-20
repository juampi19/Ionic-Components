import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  items = Array(7);

  constructor( private popoverCrtl: PopoverController ) { }

  ngOnInit() {}

  onClick( value: number ) {
    this.popoverCrtl.dismiss({
      item: value
    });
  }

}
