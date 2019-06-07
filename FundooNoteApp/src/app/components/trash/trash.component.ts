import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/service/note-service.service';
import { Note } from 'src/app/model/note';
import { MatSnackBar, MatDialog } from '@angular/material';
import { HelperServiceService } from 'src/app/service/helper-service.service';
import { TrashDailogComponent } from '../trash-dailog/trash-dailog.component';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  public notes: Note[] = [];
  public grid = false;

  constructor(private noteService: NoteServiceService, private snackBar: MatSnackBar,
              public dialog: MatDialog, private helperService: HelperServiceService) { }

  ngOnInit() {
    this.getNotes();
    this.helperService.getTheme().subscribe((resp) =>
      this.grid = resp
    );
  }

  getNotes() {
    this.noteService.retrieveNotes().subscribe(newNote => {
      this.notes = newNote;
    }, error => {
      this.snackBar.open('error', 'error to retrieve notes', { duration: 2000 });
    }
    );
  }

  openDialog(note): void {
    const dialogRef = this.dialog.open(TrashDailogComponent, {
      width: '500px',
      data: note
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getNotes();
      console.log('The dialog was closed');
    });
  }

  deleteNote(note) {
    console.log(note.noteId);
    this.noteService.deleteNote(note.noteId).subscribe(response => {
      this.snackBar.open('deleted Note', 'OK', { duration: 2000 });
      this.getNotes();
// tslint:disable-next-line: no-unused-expression
    }), error => {
      this.snackBar.open('error to delete notes', 'error', { duration: 2000 });
    };
  }

  restore(note) {
    note.inTrash = 0;
    console.log(note);
    this.noteService.updateNote(note, note.noteId).subscribe(response => {
      console.log(response);
      this.snackBar.open('Restored', 'Ok', { duration: 2000 });
      this.getNotes();
    },
      error => {
        console.log('error');
      });
  }


}
