import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent {
  ciudadesBorradas: string[] = [];
  cB:string="";
  ci:string[]=[]
  ciudades:string[]=["Granada","Madrid","Salamanca","Sevilla","Malaga","Valencia"];
  borrar():void{
    this.cB=String(this.ciudades.pop()?.toString())
    
    this.ciudadesBorradas.push(this.cB)
    this.mostrar();
  }
  mostrar():void{
  this.ci=this.ciudades;
  }
}
