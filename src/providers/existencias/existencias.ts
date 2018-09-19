import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import {Observable} from 'rxjs';

/*
  Generated class for the ExistenciasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExistenciasProvider {

  apiUrl = 'http://puntoventaz.azurewebsites.net';

  constructor(public http: HttpClient) {
    console.log('Hello ExistenciasProvider Provider');
  }

  addExistencias(data: any) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options: any = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/api/Existencias', data ,options)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  ///api/Productos/GetProductoByName/Aceite
  getExistenciasPyProd(producto:number):Observable<any>{
    return this.http.get(this.apiUrl+'/api/GetExistenciasByProd/'+producto);
  }


  updateExistencia(id:number, data:any){
    return new Promise((resolve, reject) => {
    this.http.put(this.apiUrl+'/api/Existencias/'+id, data)
    .subscribe(res => {
    resolve(res);
    }, (err) => {
    reject(err);
  });
  });
}

}
