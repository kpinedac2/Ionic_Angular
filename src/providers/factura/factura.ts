import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';

/*
  Generated class for the FacturaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FacturaProvider {

  apiUrl = 'http://puntoventaz.azurewebsites.net';

  constructor(public http: HttpClient) {
    console.log('Hello FacturaProvider Provider');
  }

  addFactura(data: any) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options: any = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/api/Facturas', data ,options)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


}
