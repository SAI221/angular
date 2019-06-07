import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Label } from 'src/app/model/label';
import { MatSnackBar, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { NoteServiceService } from 'src/app/service/note-service.service';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-pin-note',
  templateUrl: './pin-note.component.html',
  styleUrls: ['./pin-note.component.scss']
})
export class PinNoteComponent implements OnInit {

  @Input() notes;
  @Input() public grid = false;
  @Input() message;

  @Output() updateNoteEvent = new EventEmitter();

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  selectedMoment = new Date();
  public min = new Date();
  public newLabels: Label[] = [];
  selectedFiles: File;
  imageSrc: any;


  constructor(private noteService: NoteServiceService, private snackBar: MatSnackBar,
              public dialog: MatDialog, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    console.log(this.message);
  }

  public openDialog(note): void {
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      width: '600px',
      data: note
    });
    dialogRef.afterClosed().subscribe(result => {
      const data = { note };
      this.updateNoteEvent.emit(data);
      console.log('The dialog was closed');
    });
  }

  public addNoteLabel(data) {
    this.updateNoteEvent.emit(data);
  }

  public moveToTrash(key, note) {
    note.inTrash = 1;
    const data = { key, note };
    this.updateNoteEvent.emit(data);
  }

  public updateArchiveNote(key, note) {
    note.archive = key === 'archive' ? 1 : 0;
    note.pinned = 0;
    const data = { key, note };
    this.updateNoteEvent.emit(data);
  }

  public pinned(key, note) {
    note.pinned = key === 'pinned' ? 1 : 0;
    const data = { key, note };
    this.updateNoteEvent.emit(data);
  }

  public removeLabel(label, note) {
    this.noteService.removeLabelFromNote(note.noteId, label.labelId).subscribe(response => {
      console.log('deleting check in database');
      const data = { note };
      this.updateNoteEvent.emit(data);
    }, (error) => console.log(error));
  }

  public dailogCollaborator(note) {
    const dialogRef = this.dialog.open(CollaboratorComponent, {
      width: '500px',
      height: '250px',
      data: note
    });
    dialogRef.afterClosed().subscribe(result => {
      const data = { note };
      this.updateNoteEvent.emit(data);
      console.log('The dialog was closed');
    });
  }

  public updateColor(data) {
    this.updateNoteEvent.emit(data);
  }

  public saveRemainder(selectedMoment, note) {
    note.remainder = selectedMoment;
    console.log(note.remainder);
    const data = { note };
    this.updateNoteEvent.emit(data);
  }

  public removeRemainder(note) {
    note.remainder = null;
    console.log(note.remainder);
    const data = { note };
    this.updateNoteEvent.emit(data);
  }

  public onFileChanged(event, note) {
    this.selectedFiles = event.target.files[0];
    this.uploadImage(note);
  }

  public uploadImage(note) {
    this.noteService.addImage(this.selectedFiles, note.noteId).subscribe((resp) => {
      console.log('image added');
      const data = { note };
      this.updateNoteEvent.emit(data);
    }
    );
  }

  public getImages(image, note): any {
    const url = `data:${note.contentType};base64,${image.images}`;
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
