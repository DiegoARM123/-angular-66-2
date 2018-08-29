import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css']
})
export class ListaEventosComponent implements OnInit {


  eventos = [
    {
      nombre: "Connferencia angular",
      ciudad: 'Bogota'
    },
    {
      nombre: "Connferencia react",
      ciudad: 'Bogota'
    },
    {
      nombre: "Connferencia ionic",
      ciudad: 'Bogota'
    }
    ,
    {
      nombre: "Connferencia ionic",
      ciudad: 'Bogota'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
