import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHandlerService } from 'src/app/service/http-handler.service';

@Component({
  selector: 'app-notesearchbody',
  templateUrl: './notesearchbody.component.html',
  styleUrls: ['./notesearchbody.component.scss']
})
export class NotesearchbodyComponent implements OnInit {
  @Output() eventCreate = new EventEmitter();

  public showHeader = true;
  createNoteForm: FormGroup;
  loading = false;
  submitted = false;
  selectedMoment = new Date();
  public min = new Date();
  public mytoken = localStorage.getItem('token');
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
              private service: HttpHandlerService) { }

  ngOnInit() {
    this.createNoteForm = this.formBuilder.group({
      title: [''],
      description: ['']
    });
  }
  get f() { return this.createNoteForm.controls; }

  onSubmit(note) {
    this.submitted = true;
    if (this.createNoteForm.invalid) {
      return;
    }
    if (this.createNoteForm.value.title === '' && this.createNoteForm.value.description === '') {
      return;
    }
    console.log(this.mytoken);
    console.log(note);
    this.service.createNote(note).subscribe(response => {
      this.eventCreate.emit(true);
      // this.snackBar.open("success", "note created", {
      //   duration: 2000
      // });
    });
  }
}
