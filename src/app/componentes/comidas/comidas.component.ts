import { Component, OnInit } from '@angular/core';
import { tService } from '../service/tarea.service';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css']
})
export class ComidasComponent {

constructor(private service:tService){}
get comidas(){
  return this.service.comidas;
  }


  borrar():void{
   this.service.borrarComidas();
  }

}
