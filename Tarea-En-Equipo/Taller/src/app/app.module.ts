import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { ServicioComponent } from './servicio/servicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    VehiculoComponent,
    ServicioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
