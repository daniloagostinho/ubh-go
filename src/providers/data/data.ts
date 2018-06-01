import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class DataService {
  dadosFront = {nome: 'carlos', idade: 22};
  apiUrl = 'https://jsonplaceholder.typicode.com';
  data = JSON.stringify(this.dadosFront);
  constructor(public http: HttpClient) {

  }

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/users').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/users', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  };

  // postUser() {
  //   this.http.post(this.apiUrl+'/users', JSON.stringify(this.data), {
  //     headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
  //     params: new HttpParams().set('id', '3'),
  //   })
  //   .subscribe(res => {
  //     resolve(res);
  //   }, (err) => {
  //     reject(err);
  //   });
  // }



}

