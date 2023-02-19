import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
  transform( value: string, is_mayus: boolean = true ): string {
    if (is_mayus) {
      return value.toUpperCase();
    } else {
      return value.toLowerCase();
    }
  }
}
