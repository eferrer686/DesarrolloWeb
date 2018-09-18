import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import {catchError} from 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private _http:Http) { }

  obtenerClientes():String{
    // return this.http.get('https://swapi.co/api/people/1').pipe(resultado => resultado.json());
    return "Estoy consumiendo el Servicio";
  }
}
