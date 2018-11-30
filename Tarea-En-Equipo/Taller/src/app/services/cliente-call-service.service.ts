import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Cliente } from '../models/cliente';


@Injectable({
  providedIn: 'root'
})

export class ClienteCallServiceService {

  public clientes:object;

  constructor(private http: any) {
    
    var obj;
    this.getClientes().subscribe(data => obj = data, error => console.log(error));
  }

  public getClientes(): Observable<any> {
    return this.http.get("clientes.json")
      .map((res: any) => res.json())
      .catch((error: any) => console.log(error));
  }

  public setClientes(){
    this.clientes = this.getClientes();
  }


  public getCliente(id): Observable<any> {
    return this.http.get("id:" + id).pipe(
      map(function (res) {
        return res;
      }));
  }
  
  
  

}
