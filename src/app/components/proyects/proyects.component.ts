import { Component } from '@angular/core';
import { ListaProyectos } from './proyects.listado';
@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {
	public Lista: any;
	constructor(){
		this.Lista = ListaProyectos;


	}

}
