import { Component, OnInit } from '@angular/core';
import { HttpHandlerService } from 'src/app/service/http-handler.service';
import { Router } from '@angular/router';
import { Note } from 'src/app/model/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  public notes: Note[] = [];
  constructor(private service: HttpHandlerService,
              private router: Router) { }

  ngOnInit() {
    this.getNotes();
  }
  public getNotes() {
    this.service.retrieveNotes().subscribe(newNote => {
      this.notes = newNote;
    }, (error) => console.error(error));
    }
}
