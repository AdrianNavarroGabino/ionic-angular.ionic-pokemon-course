import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  lblText: string = "paso uno";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lblText = this.navParams.get('param');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

}
