import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  public token = localStorage.getItem('token');
  public httpheaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      token: this.token
    })
  };

  constructor(private httpUtil: HttpService, private router: Router, public snackBar: MatSnackBar) { }

  retrieveNotes(token): Observable<any> {
    // const httpheaders = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     token
    //   })
    // };
    return this.httpUtil.getService(environment.note_url + 'notelist', this.httpheaders);
  }

  createNote(note): Observable<any> {
    // const token = localStorage.getItem('token');
    // const httpheaders = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     token
    //   })
    // };
    return this.httpUtil.postServiceForNoteCreate(environment.note_url + 'create', this.httpheaders, note);
  }
  updateNote(note) {
    // const token = localStorage.getItem('token');
    // const httpheaders = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     token
    //   })
    // };
    return this.httpUtil.putServiceForNoteUpdate(environment.note_url + 'update', note, this.httpheaders);
  }

  deleteNote(noteId) {
    // const token = localStorage.getItem('token');
    // const httpheaders = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     token
    //   })
    // };
    return this.httpUtil.deleteServiceForNoteDelete(environment.note_url + 'delete/' + noteId, this.httpheaders);
}

notesInTrash(token) {
//   const httpheaders = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/x-www-form-urlencoded',
//       token
//     })
// };
  return this.httpUtil.getService(environment.note_url + 'notesInTrash/' , this.httpheaders);

}
notesInArchive(token): Observable<any>  {
  // const httpheaders = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     token
  //   })
  // };
  return this.httpUtil.getService(environment.note_url + 'notesInArchive/' , this.httpheaders);
}

// createLabel(newLabel: any): any {
//   // throw new Error("Method not implemented.");
//   const token = localStorage.getItem('token');
//   const httpheaders = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       token
//     })
//   };
//   return this.httpUtil.postServiceForCreateLabel(environment.note_url + 'label', httpheaders, newLabel);
//  }

retrieveLabels(): Observable<any> {
  return this.httpUtil.getService(`${environment.note_url}retrievelabel`, this.httpheaders);
}

updateLabel(label, id) {
  return this.httpUtil.putService(`${environment.note_url}updatelabel/` + id, this.httpheaders, label);
}

deleteLabel(id) {
  return this.httpUtil.deleteService(`${environment.note_url}deletelabel/` + id, this.httpheaders);
}

createLabel(label): Observable<any> {
  return this.httpUtil.postServiceForCreateLabel(`${environment.note_url}createlabel`, this.httpheaders, label);
}

removeLabelFromNote(noteId, labelId) {
  return this.httpUtil.deleteServiceWithParams(`${environment.note_url}removenotebylabel/`, {
    params: {
      noteId,
      labelId,
    },
    observe: 'response'
  }
  );

}

addLabelNote(noteId, label): Observable<any> {
  console.log('noteLabel');
  return this.httpUtil.AddLabelByNote(`${environment.note_url}addnotebylabel/` + noteId, label);
}
}

