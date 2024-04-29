import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importar Componentes al Router: 

import { AboutComponent } from './components/about/about.component';

import { BlogComponent } from './components/blog/blog.component';

import { ProyectsComponent } from './components/proyects/proyects.component';

import { ErrorComponent } from './components/error/error.component';

//Definiendo la ruta para cada componente: 
const routes: Routes = [
	{path: '', component : BlogComponent},
	{path: 'About', component : AboutComponent},
	{path: 'Proyects', component : ProyectsComponent},
	{path: 'Blog', component : BlogComponent},
	{path: '**', component : ErrorComponent}
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
