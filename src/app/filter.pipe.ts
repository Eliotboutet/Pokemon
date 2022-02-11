import {Pipe, PipeTransform} from '@angular/core';
import Pokemon from "../models/Pokemon";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Pokemon[], filterBy: string): Pokemon[] {
    filterBy = filterBy.toLocaleLowerCase();
    return value.filter((pokemon: Pokemon) => pokemon.name.toLocaleLowerCase().indexOf(filterBy) !== -1)
  }
}
