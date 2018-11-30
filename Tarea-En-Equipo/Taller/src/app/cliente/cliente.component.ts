import { Component, OnInit } from '@angular/core';
import {Cliente} from "../models/Cliente";
import {ClienteCallServiceService} from "../services/cliente-call-service.service"


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clients = new Array();

  constructor(public rest: ClienteCallServiceService) { }

  
  ngOnInit() {
    
    this.getClientes();
  }
  getClientes() {
    this.clients = new Array();
    this.rest.getClientes().subscribe((data: any) => {
      console.log(data);
      this.clients = data;
    });
  }
}
