import { Component, OnInit } from '@angular/core';
import Pokemon from "../../models/Pokemon";
import {POKEMONS} from "../../mockdata/mock-pokemon";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-list-pokemons-component',
  templateUrl: './list-pokemons-component.component.html',
  styleUrls: ['./list-pokemons-component.component.css']
})
export class ListPokemonsComponentComponent implements OnInit {

  pokemonService: PokemonService;

  constructor(pokemonService: PokemonService) {
    this.pokemonService = pokemonService;
  }

  ngOnInit(): void {}
}
