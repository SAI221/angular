import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
import { NotesComponent } from './components/notes/notes.component';
import { AuthGuard } from './gaurd/auth.guard';
import { ArchiveNoteComponent } from './components/archive-note/archive-note.component';
import { TrashComponent } from './components/trash/trash.component';
import { SearchNoteComponent } from './components/search-note/search-note.component';
import { RemainderComponent } from './components/remainder/remainder.component';
import { LabelsComponent } from './components/labels/labels.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent,
  canActivate: [AuthGuard],
   children: [
     {
       path: 'notes', component: NotesComponent
     },
     {
      path: 'archive-notes',
      component: ArchiveNoteComponent
    },
    {
      path: 'trash-notes',
      component: TrashComponent
    },
    {
      path: 'search',
      component: SearchNoteComponent
    },
    {
      path: 'remainder',
      component: RemainderComponent
    },
    {
      path: 'label/:labelName',
      component: LabelsComponent
    },
    {
      path: '',
      component: SideNavBarComponent
    },
    {
      path: '',
      redirectTo: 'notes',
      pathMatch: 'full'
    }
  ]
 },
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo: '/login', pathMatch: 'full'},
 // {path: 'notes' , component: NotesComponent}
{
 path: 'resetpassword/:id',
 component: ResetPasswordComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
