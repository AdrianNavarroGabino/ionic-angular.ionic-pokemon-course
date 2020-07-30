import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ExampleApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExampleApiProvider {
  data: any;
  pokemon: any;

  constructor(public http: HttpClient) {
    console.log('Hello ExampleApiProvider Provider');
  }

  loadPokemons() {
    return new Promise(resolve => {
      this.http.get('https://pokeapi.co/api/v2/pokemon')
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  loadPokemonDetails(url: any) {
    return new Promise(resolve => {
      this.http.get(url)
        .subscribe(pokemon => {
          this.pokemon = pokemon;
          resolve(this.pokemon);
        });
    });
  }
}
