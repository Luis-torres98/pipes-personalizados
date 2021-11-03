import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'vuela'})
export class VuelaPipe implements PipeTransform {
	transform(value: boolean) {
		return value ? 'Si vuela papá' : 'No vuela, trimaldito'
	}
}