import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.css']
})
export class DiasComponent{

  dias:string[]=["lunes","martes","miercoles","jueves","viernes"];
  borrar():void{

    this.dias.pop();
  }

}
