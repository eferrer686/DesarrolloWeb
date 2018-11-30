import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CochesService, Coche, Servicios } from '../services/coches.service';


@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss']
})
export class ServicioComponent implements OnInit {

  servicio: Servicios = new Servicios();

  constructor(private activatedRoute: ActivatedRoute,
    private cochesService: CochesService) {

    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.servicio.dueno = params['dueno'];
      this.servicio.responsable = params['responsable'];
      this.servicio.fecha = params['fecha'];
      this.servicio.tipo = params['tipo'];
    });
}

  ngOnInit() {
  }

}
