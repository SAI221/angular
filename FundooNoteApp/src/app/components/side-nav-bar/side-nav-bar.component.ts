import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { EditLableComponent } from '../edit-lable/edit-lable.component';
import { Label } from 'src/app/model/label';
import { MatSnackBar, MatDialog, MatSidenav } from '@angular/material';
import { HelperServiceService } from 'src/app/service/helper-service.service';
import { NoteServiceService } from 'src/app/service/note-service.service';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent implements OnInit {
  @ViewChild('drawer') public drawer;
  @Input() public toggleSidebar: Subject<any>;
  @Input() public grid = false;
  private sidenav: MatSidenav;

  public labels: Label[] = [];

  constructor(private router: Router, private noteService: NoteServiceService, private snackBar: MatSnackBar,
              public dialog: MatDialog, private helperService: HelperServiceService) { }

  ngOnInit() {
    // this.toggleSidebar.subscribe(event => {
    //   if (this.drawer) {
    //     this.drawer.toggle();
    //   }
    // });

    this.getLabels();
  }

  public toggle(): void {
    this.sidenav.toggle();
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
      this.helperService.setLabels(newLabel);
    }
    );
  }

  notesWithList(label, path) {
    this.router.navigate([path, label.labelName]);
  }

}
