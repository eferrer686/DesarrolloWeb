import { Component, OnInit } from '@angular/core';
import { CochesService, Coche } from 'src/app/services/coches.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.scss']
})
export class CochesComponent implements OnInit {
  coches: Array<Coche>;
  constructor(private cochesService: CochesService, private router: Router) {
    this.coches = cochesService.getCoches();
   }


  ngOnInit() {
  }

  goToCoche(c: Coche) {
    this.router.navigate(['/servicios', c.id]);
  }

}
