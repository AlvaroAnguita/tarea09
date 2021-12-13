import { Component, OnInit } from '@angular/core';
import { tService } from '../service/tarea.service';


@Component({
  selector: 'app-flores',
  templateUrl: './flores.component.html',
  styleUrls: ['./flores.component.css']
})
export class FloresComponent{

constructor(private service:tService){}
get flores(){
  return this.service.flores;
  }


  borrar():void{
   this.service.borrarFlores();
  }

}
