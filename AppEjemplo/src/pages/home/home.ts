import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecondPage } from '../second/second';
import { ExampleApiProvider } from '../../providers/example-api/example-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  exampleText: string = "primera parte";
  fromApi: Array<any> = [];

  constructor(public navCtrl: NavController, public exampleApiProvider: ExampleApiProvider) {
    this.exampleApiProvider.loadPokemons()
      .then(data => {
        data['results'].forEach(p => {
          this.exampleApiProvider.loadPokemonDetails(p['url'])
            .then(pokemon => {
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
