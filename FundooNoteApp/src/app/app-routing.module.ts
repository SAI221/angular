import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
import { NotesComponent } from './components/notes/notes.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent,
   children: [
     {
       path: 'notes', component: NotesComponent
     },
     {
       path: '', component: SideNavBarComponent
     },
     {
      path: '',
      redirectTo: 'main-notes',
      pathMatch: 'full'
    }
   ]
 },
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
 // {path: 'notes' , component: NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
