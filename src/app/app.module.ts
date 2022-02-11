import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPokemonsComponentComponent } from './list-pokemons-component/list-pokemons-component.component';
import {FormsModule} from "@angular/forms";
import { FilterPipe } from './filter.pipe';
import { HoverDirective } from './hover.directive';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPokemonsComponentComponent,
    FilterPipe,
    HoverDirective,
    PokemonComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
