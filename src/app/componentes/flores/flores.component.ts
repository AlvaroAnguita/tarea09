import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-flores',
  templateUrl: './flores.component.html',
  styleUrls: ['./flores.component.css']
})
export class FloresComponent{

  flores:string[]=["Marihuana","Aciano ","Dahlia","Candy Cane","Hakea Laurina","Flor de Jade","Zinnia","Flor Tricyrtis Hirta"];
  borrar():void{
    while(this.flores.length>0){
      this.flores.pop();
    }
  }

}
