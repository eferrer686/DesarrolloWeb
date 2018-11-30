export class Coche {
  id: number;
  marca: string;
  modelo: string;
  año:string;
  placa:string;
  ultimoServicio:Date;
  km:number;
  

  constructor(id: number,
    marca: string,
    modelo: string,
    año:string,
    placa:string,
    ultimoServicio:Date,
    km:number) {
    
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.placa = placa;
    this.ultimoServicio = ultimoServicio;
    this.km = km;
  }

  getId(): number{
    return this.id;
  }

}
