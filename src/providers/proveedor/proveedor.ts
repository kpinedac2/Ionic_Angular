import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';

/*
  Generated class for the ProveedorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProveedorProvider {

  apiUrl = 'http://puntoventaz.azurewebsites.net';
  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }

  getProveedor() {
    return new Promise(resolve => {
    this.http.get(this.apiUrl+'/api/Proveedores').subscribe(data => {
    resolve(data);}, 
    err => {
    console.log(err);
    });
    });
    }

       
    addProveedor(data: any) {
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options: any = new RequestOptions({ headers: headers });

      return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl+'/api/Proveedores', data ,options)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }

    updateProveedores(id:number, data:any){
      return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl+'/api/Proveedores/'+id, data)
      .subscribe(res => {
      resolve(res);
      }, (err) => {
      reject(err);
    });
    });
  }

}
