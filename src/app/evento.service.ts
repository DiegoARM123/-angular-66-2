import { Injectable } from '@angular/core';
import { Evento } from './models/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor() { }

  obtenerDatos(){
    return EVENTOS;
  }
}

export const EVENTOS:Evento[] = [
  {
    nombre: "Connferencia angular",
    ciudad: 'Bogota',
    descripcion: "Angular 7"
  },
  {
    nombre: "Connferencia react",
    ciudad: 'Bogota',
    descripcion: "Angular vs Reac"
  },
  {
    nombre: "Connferencia ionic",
    ciudad: 'Bogota',
    descripcion: "Componentes web en ionic"
  }
  ,
  {
    nombre: "ionic vs flutter",
    ciudad: 'Bogota',
    descripcion: "hibrido vs Nativo"
  }
];