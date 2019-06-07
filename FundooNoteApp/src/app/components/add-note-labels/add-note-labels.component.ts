import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Label } from 'src/app/model/label';
import { HelperServiceService } from 'src/app/service/helper-service.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { NoteServiceService } from 'src/app/service/note-service.service';

@Component({
  selector: 'app-add-note-labels',
  templateUrl: './add-note-labels.component.html',
  styleUrls: ['./add-note-labels.component.scss']
})
export class AddNoteLabelsComponent implements OnInit {
  @Input() note: any;
  @Output() eventAddNoteLabel = new EventEmitter();
  public labels: Label[] = [];
  public newLabels: Label[] = [];
  public filter = '';

  constructor(private noteService: NoteServiceService, private snackBar: MatSnackBar,
              public dialog: MatDialog, private helperService: HelperServiceService) { }

  ngOnInit() {
    this.getLabels();
  }
  public onClickCheckbox(event, label, note) {
    event.stopPropagation();
    this.noteService.addLabelToNote(note.noteId, label).subscribe(response => {
      console.log('adding check in database');
      const data = { note };
      this.eventAddNoteLabel.emit(data);
    }, (error) => console.log(error));
  }

  public getLabels() {
    this.noteService.retrieveLabels().subscribe(newLabel => {
      this.labels = newLabel;
      console.log(this.labels);
    }, error => {
      this.snackBar.open('error', 'error to retrieve labels', { duration: 2000 });
    }
    );
  }

  public labelFilter(event, noteLabels) {
    event.stopPropagation();
    this.newLabels.length = 0;
    let k = 0;
// tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.labels.length; i++) {
// tslint:disable-next-line: no-var-keyword
      var present = 0;
// tslint:disable-next-line: prefer-for-of
      for (let j = 0; j < noteLabels.length; j++) {
        if (this.labels[i].labelId === noteLabels[j].labelId && present === 0) {
          present = 1;
        }
      }
      if (present === 0) {
        this.newLabels[k] = this.labels[i];
        k++;
      }
    }
    // this.labels.filter(label => noteLabels.filter(noteLabel => {
    //   if (label.labelId !== noteLabel.labelId) {
    //     this.newLabels.push(label);
    //   }
    // }))
  }

  public createNewLabel(filter, note) {
    const var1 = note.labels.some((label) => label.labelName === filter);
    const var2 = this.newLabels.some((label) => label.labelName === filter);
    if (var1 || var2) {
      this.snackBar.open('label name already present', 'error', { duration: 2000 });
      return;
    }
    const newLabel = {
      labelName: filter
    };
    this.noteService.createLabel(newLabel).subscribe(label => {
      this.noteService.addLabelToNote(note.noteId, label).subscribe(response => {
        console.log('adding check in database');
        const data = { note };
        this.eventAddNoteLabel.emit(data);
        this.snackBar.open('label created', 'Ok', { duration: 2000 });
      });
    }, error => {
      this.snackBar.open('error', 'error to create labels', { duration: 2000 });
    }
    );
  }
}
