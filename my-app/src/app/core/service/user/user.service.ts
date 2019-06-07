import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public token = localStorage.getItem('token');
  public httpheaders() {
    // console.log("localStorage.getItem('token')::", localStorage.getItem('token'));
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       // token : localStorage.getItem('token')
        token : this.token
      })
    };
  }
  constructor(private httpUtil: HttpService, private router: Router ) { }

  login(user) {
    return this.httpUtil.postService(environment.base_url + 'login', user);
  }
  // http
  // .get<any>('url', {observe: 'response'})
  // .subscribe(resp => {
  //   console.log(resp.headers.get('X-Token'));
  // });

  register(user) {
   return this.httpUtil.postService(environment.base_url + 'registration', user);
  }

  forgotpassword(user) {
    return this.httpUtil.postService(environment.base_url + 'forgot', user);
  }

  resetpassword(user, id) {
    return this.httpUtil.putService(environment.base_url + 'reset/' + id, user, id);
  }
}
