import {RouterModule, Routes} from '@angular/router';
import {CochesComponent} from 'src/app/coches/coches.component';
import {ServiciosComponent} from 'src/app/servicios/servicios.component';
import {ServicioComponent} from 'src/app/servicio/servicio.component';

const APP_ROUTES: Routes = [
    {path: 'coches', component: CochesComponent},
    {path: 'servicios/:idCoche', component: ServiciosComponent},
    {path: 'servicio/:dueno/:responsable/:fecha/:tipo', component: ServicioComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'coches'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
