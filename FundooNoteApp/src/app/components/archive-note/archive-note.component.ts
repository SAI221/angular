import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note';
import { MatSnackBar, MatDialog } from '@angular/material';
import { HelperServiceService } from 'src/app/service/helper-service.service';
import { NoteServiceService } from 'src/app/service/note-service.service';

@Component({
  selector: 'app-archive-note',
  templateUrl: './archive-note.component.html',
  styleUrls: ['./archive-note.component.scss']
})
export class ArchiveNoteComponent implements OnInit {
  public notes: Note[] = [];
  public grid = false;
  public message = 'archive';
  constructor(private noteService: NoteServiceService, private snackBar: MatSnackBar,
              public dialog: MatDialog, private helperService: HelperServiceService) { }

  ngOnInit() {
    this.getNotes();
    this.helperService.getTheme().subscribe((resp) =>
      this.grid = resp
    );
    console.log(this.message);
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
