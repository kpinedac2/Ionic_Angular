import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';

/*
  Generated class for the UsuariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuariosProvider {

  apiUrl = 'http://puntoventaz.azurewebsites.net';

  constructor(public http: HttpClient) {
    console.log('Hello EmpleadosProvider Provider');
  }

  getUsuarios() {
    return new Promise(resolve => {
    this.http.get(this.apiUrl+'/api/Usuarios').subscribe(data => {
    resolve(data);}, 
    err => {
    console.log(err);
    });
    });
    }

       
    addUsuarios(data: any) {
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options: any = new RequestOptions({ headers: headers });

      return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl+'/api/Usuarios', data ,options)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }

    updateUsuario(id:number, data:any){
      return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl+'/api/Usuarios/'+id, data)
      .subscribe(res => {
      resolve(res);
      }, (err) => {
      reject(err);
    });
    });
  }

}
