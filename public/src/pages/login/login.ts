import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { NodeResponse } from '../../models/node_response';
import { RestProvider } from '../../providers/rest/rest';
import { Constants } from '../../models/constant';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  model: any = {};
  error = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, private restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLoggedin() {
    this.restProvider.login(this.model.email, this.model.password).subscribe(response => {
      console.log(response)
        if (response.success) {
            console.log('connecter')
        } else {
            this.error = 'Username or password is incorrect';
        }
    });

}

}
