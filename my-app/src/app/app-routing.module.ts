
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ArchiveNotesComponent } from './components/archive-notes/archive-notes.component';
import { TrashedNotesComponent } from './components/trashed-notes/trashed-notes.component';
import { ViewNoteComponent } from './components/view-note/view-note.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { LabelComponent } from './components/label/label.component';
import { RemainderComponent } from './components/remainder/remainder.component';
import { AuthGuard } from './core/service/auth/auth.guard';


const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component: HomeComponent ,
  canActivate: [AuthGuard],
  children: [
    { path: '', redirectTo: 'viewnotes', pathMatch: 'full' },
    { path: 'archivenote', component: ArchiveNotesComponent},
    { path: 'trashednote', component: TrashedNotesComponent},
    { path: 'viewnotes', component: ViewNoteComponent },
    {path: 'label' , component: LabelComponent},
    {path: 'remainder' , component: RemainderComponent}
  ]

},
{path: 'resetpassword/:id', component: ResetpasswordComponent},
{path: 'forgotpassword', component: ForgotpasswordComponent},
  { path: '**', redirectTo: 'login' , pathMatch: 'full'}
 ];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
    })
    export class AppRoutingModule { }

