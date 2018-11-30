import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CochesService {
  cochesArray: Array<Coche> = [
    {
      id: 0,
      marca: 'Mitsubishi',
      modelo: 'Lancer',
      placa: 'MAT-68-46',
      km: 10000,
      servicioFecha: '12-10-2014',
      servicios: [
        {
          fecha: '10-20-2010',
          tipo: 'mantenimiento',
          responsable: 'Jose Ramon',
          dueno: 'Luis Villa'
        },
        {
          fecha: '10-20-2011',
          tipo: 'refacciones',
          responsable: 'Jose Ramon',
          dueno: 'Luis Villa'
        },
        {
          fecha: '10-20-2012',
          tipo: 'choque',
          responsable: 'Jose Ramon',
          dueno: 'Luis Villa'
        }
      ]
    },
    {
      id: 1,
      marca: 'Chevrolet',
      modelo: 'Chevy',
      placa: '793-GHJ',
      km: 20,
      servicioFecha: '12-10-2010',
      servicios: [
        {
          fecha: '10-20-2010',
          tipo: 'mantenimiento',
          responsable: 'Jose Ramon',
          dueno: 'Luis Villa'
        },
        {
          fecha: '10-20-2011',
          tipo: 'refacciones',
          responsable: 'Jose Ramon',
          dueno: 'Luis Villa'
        },
        {
          fecha: '10-20-2012',
          tipo: 'choque',
          responsable: 'Jose Ramon',
          dueno: 'Luis Villa'
        }
      ]
    },
    {
      id: 2,
      marca: 'Chevrolet',
      modelo: 'Camaro',
      placa: '479-RJA',
      km: -450,
      servicioFecha: '12-10-2004',
      servicios: [
        {
          fecha: '10-20-2010',
          tipo: 'mantenimiento',
          responsable: 'Jose Ramon',
          dueno: 'Luis Villa'
        },
        {
          fecha: '10-20-2011',
          tipo: 'refacciones',
          responsable: 'Jose Ramon',
          dueno: 'Luis Villa'
        },
        {
          fecha: '10-20-2012',
          tipo: 'choque',
          responsable: 'Tomas Jesus',
          dueno: 'Luis Villa'
        }
      ]
    },
    {
      id: 3,
      marca: 'Mitsubishi',
      modelo: 'ASX',
      placa: '639-ZRGS',
      km: 1000,
      servicioFecha: '12-10-2016',
      servicios: [
        {
          fecha: '10-20-2010',
          tipo: 'mantenimiento',
          responsable: 'Jose Ramon',
          dueno: 'Eduardo Ferrer'
        },
        {
          fecha: '10-20-2011',
          tipo: 'refacciones',
          responsable: 'Jose Ramon',
          dueno: 'Eduardo Ferrer'
        },
        {
          fecha: '10-20-2012',
          tipo: 'choque',
          responsable: 'Hugo Lopez',
          dueno: 'Eduardo Ferrer'
        }
      ]
    }
  ];

  constructor() { }

  public getCoches() {
    return this.cochesArray;
  }
  public getCoche(id: number) {
    let c: Coche;
    this.cochesArray.forEach(coche => {
      if (coche.id === id) {
        c = coche;
      }
    });
    return c;
  }
}

export class Coche {
  id: number;
  marca: string;
  modelo: string;
  placa: string;
  km: number;
  servicioFecha: String;
  servicios: Array<Servicios>;

  constructor(id, marca, modelo, placa, km, servicioFecha) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.placa = placa;
    this.km = km;
    this.servicioFecha = servicioFecha;
  }
}
export class Servicios {
  fecha: string;
  tipo: string;
  responsable: String;
  dueno: String;
  constructor() {

  }
}
