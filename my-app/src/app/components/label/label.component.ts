import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { NoteService } from 'src/app/core/service/note/note.service';
import { Label } from 'src/app/core/model/label/label';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LabelComponent>, @Inject(MAT_DIALOG_DATA) public data: Label,
              private noteService: NoteService, private snackBar: MatSnackBar) { }
  public labels: Label[] = [];

  ngOnInit() {
  }

  closeClick(newLabel) {
    console.log(newLabel.labelId);
    console.log(newLabel.labelName);
    this.getLabels();
    this.noteService.createLabel(newLabel).subscribe(response => {
      this.snackBar.open('Label created successfully', 'OK', { duration: 2000 });
      console.log(response);
      this.dialogRef.close();
    },

      error => {

        console.log(error);
      });
  }

  public getLabels() {
    this.noteService.retrieveLabels().subscribe(newLabel => {
      this.labels = newLabel;
    }, error => {
      this.snackBar.open('Unable to retrieve the label or labels are empty ', 'ERROR', { duration: 2000 });
    }
    );
  }


}
