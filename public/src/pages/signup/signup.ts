import { map } from 'rxjs/operators/map';
import { Component, Input, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Client } from '../../models/clients.model';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage implements OnInit {

@Input() client:Client;


  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, private alertCtrl: AlertController) {
  }
  ngOnInit(){
    this.client = this.restProvider.getClient();
  }

  presentAlert(){
    let alert = this.alertCtrl.create({
      title: 'Inscription Réussi',
      buttons: ['dismiss']
        
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
   return this.restProvider.postUsers(this.client).subscribe(nodeResponse => {
      if (nodeResponse.success){
        console.log(nodeResponse);
      }
     else {
       //todo alert
     }
    });
    
  }

}
