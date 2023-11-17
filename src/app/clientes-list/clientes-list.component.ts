import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit{

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService){}

  ngOnInit(){
      this.clienteService.findAll().subscribe(data => {
        this.clientes = data;
      })
  }

}
