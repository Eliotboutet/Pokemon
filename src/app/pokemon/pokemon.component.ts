import {Component, Input, OnInit} from '@angular/core';
import Pokemon from "../../models/Pokemon";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon!: Pokemon;
  pokemonService: PokemonService;

  constructor(pokemonService: PokemonService) {
    this.pokemonService = pokemonService;
  }

  ngOnInit(): void {
  }

}
