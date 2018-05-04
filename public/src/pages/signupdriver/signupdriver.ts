import { map } from 'rxjs/operators/map';
import { Component, Input, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Driver } from '../../models/drivers.model';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-signupdriver',
  templateUrl: 'signupdriver.html',
})

export class SignupdriverPage implements OnInit {

@Input() driver:Driver;


  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, private alertCtrl: AlertController) {
  }
  ngOnInit(){
    this.driver = this.restProvider.getDriver();
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
   return this.restProvider.postDriver(this.driver).subscribe(nodeResponse => {
      if (nodeResponse.success){
        console.log(nodeResponse);
        
      }
     else {
       //todo alert
     }
     
    });
    
  }

}
