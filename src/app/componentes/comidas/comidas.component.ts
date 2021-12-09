import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css']
})
export class ComidasComponent {


  comidas:string[]=["Patatas con huevo","Pollo asado ","Macarrones","Albondigas en salsa de almendra","Solomillo a la pimienta",
  "Pollo al limon","Kebab"];
  borrar():void{
    while(this.comidas.length>0){
      this.comidas.pop();
    }
  }

}
