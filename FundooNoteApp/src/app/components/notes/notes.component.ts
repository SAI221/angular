import { Component, OnInit } from '@angular/core';
import { HttpHandlerService } from 'src/app/service/http-handler.service';
import { Router } from '@angular/router';
import { Note } from 'src/app/model/note';
import { MatSnackBar, MatDialog } from '@angular/material';
import { HelperServiceService } from 'src/app/service/helper-service.service';
import { NoteServiceService } from 'src/app/service/note-service.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  public grid = false;

  public notes: Note[] = [];
  constructor(private noteService: NoteServiceService, private snackBar: MatSnackBar,
              public dialog: MatDialog, private helperService: HelperServiceService) { }

  ngOnInit() {
    this.getNotes();
    this.helperService.getTheme().subscribe((resp) =>
      this.grid = resp
    );
  }

  public refresh() {
    this.getNotes();
  }

  public onUpdateNote(data) {
    this.updateMethod(data.note);
  }

  updateMethod(note) {
    this.noteService.updateNote(note, note.noteId).subscribe(response => {
      this.getNotes();
    },
      error => {
        console.log('error');
      });
  }

  public getNotes() {
    this.noteService.retrieveNotes().subscribe(newNote => {
      this.notes = newNote;
    }, error => {
      this.snackBar.open('error', 'error to retrieve notes', { duration: 2000 });
    }
    );
  }
}
