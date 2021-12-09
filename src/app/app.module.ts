import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MesesComponent } from './componentes/meses/meses.component';
import { DiasComponent } from './componentes/dias/dias.component';
import { FloresComponent } from './componentes/flores/flores.component';
import { ComidasComponent } from './componentes/comidas/comidas.component';
import { CiudadesComponent } from './componentes/ciudades/ciudades.component';

@NgModule({
  declarations: [
    AppComponent,
    MesesComponent,
    DiasComponent,
    FloresComponent,
    ComidasComponent,
    CiudadesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
