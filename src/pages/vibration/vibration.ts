import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VibrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vibration',
  templateUrl: 'vibration.html',
})
export class VibrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private vibration: Vibration) {
  }

  vibrate(){
    this.vibration.vibrate([2000,1000,2000]);
  }
  stopVibration(){
    this.vibration.vibrate(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VibrationPage');
  }

}
