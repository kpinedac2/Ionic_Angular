import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import {Observable} from 'rxjs';

/*
  Generated class for the ProductosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductosProvider {

  apiUrl = 'http://puntoventaz.azurewebsites.net';
  
  constructor(public http: HttpClient) {
    console.log('Hello ProductosProvider Provider');
  }

  getProductos() {
    return new Promise(resolve => {
    this.http.get(this.apiUrl+'/api/Productos').subscribe(data => {
    resolve(data);}, 
    err => {
    console.log(err);
    });
    });
    }

       
    addProducto(data: any) {
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options: any = new RequestOptions({ headers: headers });

      return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl+'/api/Productos', data ,options)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }

    updateProducto(id:number, data:any){
      return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl+'/api/Productos/'+id, data)
      .subscribe(res => {
      resolve(res);
      }, (err) => {
      reject(err);
    });
    });
  }

  ///api/Productos/GetProductoByName/Aceite
  getProductoByName(name:string):Observable<any>{
    return this.http.get(this.apiUrl+'/api/Productos/GetProductoByName/'+name);
  }

}
