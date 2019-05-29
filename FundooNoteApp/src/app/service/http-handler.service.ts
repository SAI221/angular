import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Login } from 'src/app/model/login';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {
  // tslint:disable-next-line: variable-name
  toggle_menu = false;
  public token = localStorage.getItem('token');
  constructor(private http: HttpClient) { }
  private httpheaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      token: localStorage.getItem('token')
    })
  };
  public login(loginUserInfo: Login): Observable<any> {
    return this.http.post<any>(`${environment.base_url}login`, loginUserInfo, { observe: 'response' });
  }

  public registration(config: User): Observable<any> {
    return this.http.post<any>(`${environment.base_url}registration`, config);
  }


  // public saveUser (api: string, model: PersonalInfo ): Observable<boolean> {
  //   return this._http.post<boolean>(api, JSON.stringify({user: model}));
  // }

  toggleSideNav(): void {
    this.toggle_menu = !this.toggle_menu;
  }
// Note Operations

retrieveNotes(): Observable<any> {
  return this.http.get(environment.base_url + 'notelist', this.httpheaders);
}

createNote(note): Observable<any> {
  return this.http.post(environment.base_url + 'notecreate', this.httpheaders, note);
}


updateNote(note, id) {
  return this.http.put(environment.base_url + 'noteupdate' + id , this.httpheaders, note);
}

deleteNote(id) {
  return this.http.delete(environment.base_url + id, this.httpheaders);
}
}
