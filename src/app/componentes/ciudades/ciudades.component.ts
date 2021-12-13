import { Component, OnInit } from '@angular/core';
import { tService } from '../service/tarea.service';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent {
constructor(private service:tService){}

  borrar():void{
   this.service.borrarCiudades();
  }
  mostrar():void{
  this.service.mostrarCiudades();
  }

  get ci(){
    return this.service.ci;
  }
  get ciudadesBorradas(){
    return this.service.ciudadesBorradas;
  }
}
