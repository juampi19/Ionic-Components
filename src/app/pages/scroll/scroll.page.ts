import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.page.html',
  styleUrls: ['./scroll.page.scss'],
})
export class ScrollPage implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;

  data: any[] = Array(20);


  constructor() { }

  ngOnInit() {
  }


  loadData( ) {

    setTimeout(() => {

      if( this.data.length > 50 ) {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      const nuevoArr = Array( 20 );

      this.data.push( ...nuevoArr );

      this.infiniteScroll.complete();
    }, 1500);

  }

}
