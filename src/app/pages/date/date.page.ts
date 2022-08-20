import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.page.html',
  styleUrls: ['./date.page.scss'],
})
export class DatePage implements OnInit {

  fechaNaci: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  cambioFecha( event ) {
    console.log(event);

    console.log( new Date( event.detail.value ) );

  }

}
