import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {

  personajes: string[] = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Mujer Maravilla'];

  constructor() { }

  ngOnInit() {
  }

  doReorder( event: any ) {
    console.log( event );

    this.personajes = event.datail.complete( this.personajes );
  }

}
