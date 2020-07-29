import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  }
}
