import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Note } from 'src/app/model/note';
import { NoteServiceService } from 'src/app/service/note-service.service';

@Component({
  selector: 'app-trash-dailog',
  templateUrl: './trash-dailog.component.html',
  styleUrls: ['./trash-dailog.component.scss']
})
export class TrashDailogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TrashDailogComponent>,
              @Inject(MAT_DIALOG_DATA) public note: Note, private noteService: NoteServiceService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  deleteNote(note) {
    this.noteService.deleteNote(note.noteId).subscribe(response => {
      this.snackBar.open('deleted Note', 'OK', { duration: 2000 });
// tslint:disable-next-line: no-unused-expression
    }), error => {
      this.snackBar.open('error to delete note', 'error', { duration: 2000 });
    };
  }

  restore(note) {
    note.inTrash = 0;
    this.noteService.updateNote(note, note.noteId).subscribe(response => {
      console.log(response);
      this.snackBar.open('Restored', 'Ok', { duration: 2000 });
    },
      error => {
        console.log('error');
      });
  }


}
