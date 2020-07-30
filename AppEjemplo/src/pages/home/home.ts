import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecondPage } from '../second/second';
import { ExampleApiProvider } from '../../providers/example-api/example-api';
import { IPokemon } from '../../pokemon/IPokemon';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  exampleText: string = "primera parte";
  fromApi: Array<any> = [];

  constructor(public navCtrl: NavController,
      public exampleApiProvider: ExampleApiProvider) {
    this.exampleApiProvider.loadPokemons()
      .then(data => {
        data['results'].forEach(p => {
          this.exampleApiProvider.loadPokemonDetails(p['url'])
            .then(p1 => {
              let pokemon = new IPokemon(p1['name'], p1['id'], p1['height'],
                p1['weight'], p1['types'][0]['type']['name']);
              this.fromApi.push(pokemon);
              
              this.fromApi.sort((a, b) => {
                if(a['id'] > b['id']) {
                  return 1;
                }
                return -1;
              });
            })
        });
      });
  }

  ejercicio() {
    this.exampleText = "segunda parte";

    this.navCtrl.push(SecondPage, {
      param: "desde navegación"
    });
  }
}
