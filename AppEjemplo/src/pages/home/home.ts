import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecondPage } from '../second/second';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  exampleText: string = "primera parte";

  constructor(public navCtrl: NavController) {

  }

  ejercicio() {
    this.exampleText = "segunda parte";

    this.navCtrl.push(SecondPage, {
      param: "desde navegación"
    });
  }
}
