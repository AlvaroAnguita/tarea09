import { Component, OnInit } from '@angular/core';
import { tService } from '../service/tarea.service';

@Component({
  selector: 'app-meses',
  templateUrl: './meses.component.html',
  styleUrls: ['./meses.component.css']
})
export class MesesComponent {
  constructor (private service:tService){}

  get meses(){
    return this.service.meses;
    }

  borrar():void{
    this.service.borrarMeses();
  }

}
