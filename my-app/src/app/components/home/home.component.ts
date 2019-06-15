import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/core/service/service.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  abc = false;
  def = false;
  public grid = false;
  constructor(private router: Router, private service: ServiceService,
              private location: Location) { }

  ngOnInit() {

  }

  hideButton() {

    this.abc = !(this.abc);

    this.def = (this.abc);
  }

  navigateNotes() {
    this.router.navigate(['home/viewnotes']);
  }

  navigateArchive() {
    this.router.navigate(['home/archivenote']);
  }
  navigateTrash() {
    this.router.navigate(['home/trashednote']);
  }
  public viewGrid() {
    this.grid = !this.grid;
    this.service.setTheme(this.grid);
  }
  public reload() {
    location.reload();
  }
  public logout() {
    localStorage.setItem('token', '');
    this.router.navigate(['/login']);
  }
}
