import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { UserComponent } from './user/user.component';



@Injectable({
  providedIn: 'root'
})
export class YService {

  private endpoint = '/fetching';
// tslint:disable-next-line: deprecation
  constructor(private http: Http) { }
  getUsers(): Promise<UserComponent[]>  {
    return this.http.get(this.endpoint)
               .toPromise()
               .then(response => response.json() as UserComponent[])
               .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
