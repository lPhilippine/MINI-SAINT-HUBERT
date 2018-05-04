import "rxjs/add/operator/map";
import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Client } from '../../models/clients.model';
import { Driver } from '../../models/drivers.model';
import { NodeResponse } from "../../models/node_response";

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = "http://localhost:3000/api";
  signupUser = this.apiUrl + '/signupUser';
  signupDriver = this.apiUrl + '/signupDriver';
  loginUrl = this.apiUrl + "/login";

  private client: Client = new Client;
  private driver: Driver = new Driver;

  constructor(public http: Http) {
    console.log("Hello RestProvider Provider");
  }

  getClient(): Client {
    return this.client;
  }

  getDriver(): Driver {

    return this.driver;

  }

  postUsers(data: Client): Observable<NodeResponse> {
    return this.http.post(this.signupUser, data).map(response => {
      const nodeResponse: NodeResponse = JSON.parse(response.json());
      return nodeResponse;
    });
  }

  login(email: string, password: string): Observable<NodeResponse> {
    return this.http
      .post(this.loginUrl, { email: email, password: password })
      .map((response: Response) => {
        let nodeResponse: NodeResponse = JSON.parse(response.json());

        if (nodeResponse.data) {
        } else {
          // TODO treat wrong login
        }
        return nodeResponse;
      });
  }

  postDriver(data: Driver): Observable<NodeResponse> {
    return this.http.post(this.signupDriver, data)
      .map((response => {
        const nodeResponse: NodeResponse = JSON.parse(response.json());
        return nodeResponse;
      }));
  }
}
