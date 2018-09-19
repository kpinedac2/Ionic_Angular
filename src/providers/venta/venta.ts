import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';

/*
  Generated class for the VentaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VentaProvider {

  apiUrl = 'http://puntoventaz.azurewebsites.net';

  constructor(public http: HttpClient) {
    console.log('Hello VentaProvider Provider');
  }

  addVenta(data: any) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options: any = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/api/Ventas', data ,options)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateVenta(id:number, data:any){
    return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl+'/api/Ventas/'+id, data)
      .subscribe(res => {
      resolve(res);
      }, (err) => {
      reject(err);
      });
    });
}

}
