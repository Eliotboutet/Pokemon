import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import Pokemon from "../../models/Pokemon";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon!: Pokemon;

  constructor(pokemonService: PokemonService, public route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pokemon = pokemonService.getPokemon(parseInt(id));
    }
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'))
  }

}
