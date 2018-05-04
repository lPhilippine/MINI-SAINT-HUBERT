import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Client } from '../../models/clients.model';
import { NodeResponse } from '../../models/node_response';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = "http://localhost:3000/api";
  signupUser = this.apiUrl + '/signupUser';

  private client:Client = new Client;

  constructor(public http: Http) {
    console.log("Hello RestProvider Provider");
  }

  getClient():Client{

    return this.client;

  }

  postUsers(data: Client):Observable<NodeResponse> {
    return this.http.post(this.signupUser, data)
    .map((response=> {
      const nodeResponse: NodeResponse = JSON.parse(response.json());
        return nodeResponse;
    }));
}
}
