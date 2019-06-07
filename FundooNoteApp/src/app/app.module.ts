import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from 'src/material/MaterialModule';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotesComponent } from './components/notes/notes.component';
import { NotesearchbodyComponent } from './components/notesearchbody/notesearchbody.component';
import { AddNoteLabelsComponent } from './components/add-note-labels/add-note-labels.component';
import { ArchiveNoteComponent } from './components/archive-note/archive-note.component';
import { ChangeColorComponent } from './components/change-color/change-color.component';
import { CollaboratorComponent } from './components/collaborator/collaborator.component';
import { EditLableComponent } from './components/edit-lable/edit-lable.component';
import { ImageComponent } from './components/image/image.component';
import { LabelsComponent } from './components/labels/labels.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
// import { PinNoteComponent } from './components/pin-note/pin-note.component';
import { RemainderComponent } from './components/remainder/remainder.component';
import { SearchNoteComponent } from './components/search-note/search-note.component';
import { TrashComponent } from './components/trash/trash.component';
import { TrashDailogComponent } from './components/trash-dailog/trash-dailog.component';
import { UpdatenoteComponent } from './components/updatenote/updatenote.component';
import { NoteFilterPipe } from './pipes/note-filter.pipe';
import { SearchNotePipe } from './pipes/search-note.pipe';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { SearchUserPipe } from './pipes/search-user.pipe';
import { DynamicHoverClassDirective } from './directive/dynamic-hover-class.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    SideNavBarComponent,
    ForgotPasswordComponent,
    NotesComponent,
    NotesearchbodyComponent,
    AddNoteLabelsComponent,
    ArchiveNoteComponent,
    ChangeColorComponent,
    CollaboratorComponent,
    EditLableComponent,
    ImageComponent,
    LabelsComponent,
    ResetPasswordComponent,
   // PinNoteComponent,
    RemainderComponent,
    SearchNoteComponent,
    TrashComponent,
    TrashDailogComponent,
    UpdatenoteComponent,
    NoteFilterPipe,
    SearchNotePipe,
    SearchPipePipe,
    SearchUserPipe,
    DynamicHoverClassDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
