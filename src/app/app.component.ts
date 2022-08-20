import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Componente } from './interface/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  componente: Observable<Componente[]>;

  constructor( private dataService: DataService ) {}

  ngOnInit() {
    this.componente = this.dataService.getMenuOpts();
  }
}
