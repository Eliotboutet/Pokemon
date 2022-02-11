import { Injectable } from '@angular/core';
import Pokemon from "../models/Pokemon";
import {POKEMONS} from "../mockdata/mock-pokemon";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons: Pokemon[] = [];
  searchPoke: string = "";

  constructor(private route: ActivatedRoute) {
    this.pokemons = POKEMONS
  }

  logPokemon(pokemon: Pokemon) {
    console.log(pokemon.name);
  }

  deletePokemon(pokemonId: number): void {
    this.pokemons = this.pokemons.filter((pok: Pokemon) => pokemonId != pok.id)
  }

  seeDetails(pokemonId: number): void {
    console.log(pokemonId);
  }

  getPokemon(id: number) {
    return this.pokemons.find((pok: Pokemon) => pok.id === id) as Pokemon;
  }
}
