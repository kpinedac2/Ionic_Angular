import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';

/*
  Generated class for the VentadetalleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VentadetalleProvider {

  apiUrl = 'http://puntoventaz.azurewebsites.net';

  constructor(public http: HttpClient) {
    console.log('Hello VentadetalleProvider Provider');
  }


  //http://localhost:59978/api/GetDetalles/2018-05-07/1
  getVentaDetalles(datex:string, id:number){
    var length = 10;
    var myTruncatedString = datex.substring(0,length);

    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/api/GetDetalles/'+myTruncatedString+'/'+id).subscribe(data => {
      resolve(data);}, 
      err => {
      console.log(err);
      });
      });
  }

  addVentaDetalle(data: any) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options: any = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/api/VentaDetalles', data ,options)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getTotal(id){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/api/ActualizarTotal/'+id).subscribe(data => {
      resolve(data);
    }, 
      err => {
      console.log(err);
      });
      });
  }



}
