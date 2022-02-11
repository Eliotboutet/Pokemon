import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokemonDetailsComponent} from "./pokemon-details/pokemon-details.component";
import {ListPokemonsComponentComponent} from "./list-pokemons-component/list-pokemons-component.component";

const routes: Routes = [
  {
    path: 'pokemon/:id',
    component: PokemonDetailsComponent,
  },
  {
    path: '',
    component: ListPokemonsComponentComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
