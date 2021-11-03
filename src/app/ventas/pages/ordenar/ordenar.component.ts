import { Component, OnInit } from '@angular/core';
import { IColor, IHeroe } from '../../interfaces/ventas.interfaces';

@Component({
	selector: 'app-ordenar',
	templateUrl: './ordenar.component.html',
	styles: [],
})
export class OrdenarComponent {
	enMayuscula: boolean = false;

	ordenarPor: string = '';
	heroes: IHeroe[] = [
		{
			nombre: 'Superman',
			vuela: true,
			color: IColor.azul,
		},
		{
			nombre: 'Batman',
			vuela: false,
			color: IColor.negro,
		},
		{
			nombre: 'Robbin',
			vuela: false,
			color: IColor.amarillo,
		},
		{
			nombre: 'Linterna Verde',
			vuela: true,
			color: IColor.azul,
		},
		{
			nombre: 'Hugo',
			vuela: true,
			color: IColor.azul,
		},
		{
			nombre: 'Katia',
			vuela: false,
			color: IColor.azul,
		},
	];

	changeToggle() {
		this.enMayuscula = !this.enMayuscula;
	}

	cambiarOrden(value: string) {
		this.ordenarPor = value;
	}
}
