import { Component, OnInit } from '@angular/core';
import { tService } from '../service/tarea.service';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.css']
})
export class DiasComponent{
  constructor (private service:tService){}

  get dias(){
    return this.service.dias;
    }

  borrar():void{
    this.service.borrarDias();
  }

}
