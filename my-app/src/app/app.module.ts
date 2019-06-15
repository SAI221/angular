import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatExpansionModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MoreButtonDirective } from './more-button.directive';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import { ArchiveNotesComponent } from './components/archive-notes/archive-notes.component';
import { TrashedNotesComponent } from './components/trashed-notes/trashed-notes.component';
import { PinnedNoteComponent } from './components/pinned-note/pinned-note.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ViewNoteComponent } from './components/view-note/view-note.component';
import { NoteComponent } from './components/note/note.component';
import { LabelComponent } from './components/label/label.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { RemainderComponent } from './components/remainder/remainder.component';
import { AuthGuard } from './core/service/auth/auth.guard';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    LabelComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    RemainderComponent,
    UpdateNoteComponent,
    ArchiveNotesComponent,
    TrashedNotesComponent,
    PinnedNoteComponent,
    SideNavComponent,
    ViewNoteComponent,
    NoteComponent,
    MoreButtonDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    ColorPickerModule
  ],
  entryComponents: [UpdateNoteComponent, PinnedNoteComponent],

  providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: [] }, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
