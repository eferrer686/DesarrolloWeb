import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route} from '@angular/router';
import { CochesService , Coche, Servicios} from '../services/coches.service';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  coche: Coche;

  constructor(private activatedRoute: ActivatedRoute,
              private cochesService: CochesService,
              private router: Router) {
    this.activatedRoute.params.subscribe( params => {
      this.coche = cochesService.getCoche(
          // tslint:disable-next-line:radix
          Number.parseInt(
              params['idCoche']
            )
        );
    } );
  }

  ngOnInit() {
  }

  goToServicio(s){
    this.router.navigate(['/servicio', s.dueno, s.responsable, s.fecha, s.tipo]);
    
  }

}
