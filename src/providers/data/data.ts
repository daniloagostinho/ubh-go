import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor() {

  }


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

