import { Injectable } from "@angular/core";


@Injectable()
export class tService{
  private _meses:string[]=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

  get meses():string[]{
    return[...this._meses]
  }

   public borrarMeses():void{
    this._meses.pop();

  }


  private _dias:string[]=["lunes","martes","miercoles","jueves","viernes"];
  get dias():string[]{
    return[...this._dias]
  }

   public borrarDias():void{
    this._dias.pop();

  }

  private _comidas:string[]=["Patatas con huevo","Pollo asado ","Macarrones","Albondigas en salsa de almendra","Solomillo a la pimienta",
  "Pollo al limon","Kebab"];
  get comidas():string[]{
    return[...this._comidas]
  }


  public borrarComidas():void{
    this._comidas =[];

  }

  private _flores:string[]=["Marihuana","Aciano ","Dahlia","Candy Cane","Hakea Laurina","Flor de Jade","Zinnia","Flor Tricyrtis Hirta"];
  get flores():string[]{
    return[...this._flores]
  }


  public borrarFlores():void{
    this._flores =[];

  }


  private _ciudadesBorradas: string[] = [];
  private _cB:string="";
  private _ci:string[]=[]
  private _ciudades:string[]=["Granada","Madrid","Salamanca","Sevilla","Malaga","Valencia"];

  public borrarCiudades():void{
    this._cB=String(this._ciudades.pop()?.toString())

    this._ciudadesBorradas.push(this._cB)
    this.mostrarCiudades();
  }

  get ciudadesBorradas():string[]{
    return[...this._ciudadesBorradas]
  }
  get ci():string[]{
    return[...this._ci]
  }

 public mostrarCiudades():void{
  this._ci=this._ciudades;
  }

  constructor(){
    console.log("holaaaaa")
  }
}
