import { Component } from '@angular/core';
import { EntradasBlog } from './blog.entradas';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
	public Lista: any;
	public Titulo_Entrada: string;
	public Boton_Mostrar: boolean;
	constructor(){
		this.Titulo_Entrada = "";
		this.Lista = EntradasBlog;
		this.Boton_Mostrar = false;
		for(let i = 0 ; i < 10; i++){
			console.log("paso izquierdo");
			if(i>=3) return; 
			console.log("paso derecho");
		}
	}
	Mostrar_Entradas(){
		if(this.Boton_Mostrar){
			this.Boton_Mostrar = false;
		}else{
			this.Boton_Mostrar = true;
		};
		}



}
