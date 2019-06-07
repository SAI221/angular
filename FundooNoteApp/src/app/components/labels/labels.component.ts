import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NoteServiceService } from 'src/app/service/note-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatDialog } from '@angular/material';
import { HelperServiceService } from 'src/app/service/helper-service.service';
import { Label } from 'src/app/model/label';
import { Subject } from 'rxjs';
import { EditLableComponent } from '../edit-lable/edit-lable.component';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {

  @ViewChild('drawer') public drawer;
  @Input() public toggleSidebar: Subject<any>;
  @Input() public grid = false;

  public labels: Label[] = [];


  constructor(private router: Router, private noteService: NoteServiceService, private snackBar: MatSnackBar,
              public dialog: MatDialog, private helperService: HelperServiceService) { }

  ngOnInit() {
    this.toggleSidebar.subscribe(event => {
      if (this.drawer) {
        this.drawer.toggle();
      }
    });
    this.getLabels();
  }
  public navigateTo(path) {
    this.router.navigate([path]);
  }

  editLabel(): void {
    const dialogRef = this.dialog.open(EditLableComponent, {
      width: '500px',
      height: '250px',
      data: ''
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getLabels();
      console.log('The dialog was closed');
    });
  }

  public getLabels() {
    this.noteService.retrieveLabels().subscribe(newLabel => {
      this.labels = newLabel;
      // this.helperService.setLabels(newLabel);
    }
    );
  }

  notesWithList(label, path) {
    this.router.navigate([path, label.labelName]);
  }

}
