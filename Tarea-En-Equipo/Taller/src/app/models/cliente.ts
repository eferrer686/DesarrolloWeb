import {Coche} from '../models/coche';

export class Cliente {
  id: number;
  nombre: string;
  telefono: string;
  domicilio:string;
  coche: object;


  constructor( id: number,
    nombre: string,
    telefono: string,
    domicilio:string,
    coche: object) {

    this.id = id;
    this.nombre = nombre;
    this.telefono = telefono;
    this.domicilio = domicilio;
    this.coche = coche;
  }

  getId(): number{
    return this.id;
  }
}
