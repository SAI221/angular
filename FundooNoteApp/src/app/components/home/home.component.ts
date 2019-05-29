import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpHandlerService } from 'src/app/service/http-handler.service';
import { Router } from '@angular/router';
import { Note } from 'src/app/model/note';
import { HelperServiceService } from 'src/app/service/helper-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public grid = false;
  public hide = true;
  public user;
  public dynamicBind: Note;
  public searchString = '';
  public imageData =  {} as ImageData;
  public toggleNav: Subject<any> = new Subject();


  constructor(private router: Router,
              private service: HttpHandlerService,
              private helperService: HelperServiceService) { }

  ngOnInit() {
    // this.getImage();
  }

  // getImage() {
  //   this.userService.downloadImage().subscribe(resp => {
  //     this.user = resp;
  //     console.log(this.user)
  //     if (this.user.profilePicture != null) {
  //       const url = `data:${this.user.contentType};base64,${this.user.profilePicture}`;
  //       this.imageData = {
  //         imageSrc: this.sanitizer.bypassSecurityTrustUrl(url)
  //       }
  //     }
  //     else {
  //       this.imageData.imageSrc = null;
  //     }
  //   }, error => {
  //     console.log("error")
  //   }
  //   )
  // }

  // openDialog(): void {
  //   const dialogRef = this.dailog.open(ImageComponent, {
  //     width: '500px',
  //     data: ''
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.getImage();
  //     console.log('The dialog was closed');
  //   });
  // }

  public toggle() {
    this.toggleNav.next();
    console.log(this.toggleNav);
  }

  // public getNotes() {
  //   this.service.retrieveNotes().subscribe(newNote => {
  //     this.dynamicBind = newNote;
  //   },
  //     // tslint:disable-next-line: no-unused-expression
  //     (error) => console.error(error));
  // }


  public logout() {
  localStorage.removeItem('token');
  this.router.navigate(['/login']);
}



 public viewGrid() {
  this.grid = !this.grid;
  this.helperService.setTheme(this.grid);
 }





//    public searchtest() {
//    this.helperService.setSearch(this.searchString);
//    this.router.navigate(['home/search']);
//  }

//  clearSearch() {
//    this.searchString = '';
//    this.router.navigate(['home/notes']);
//  }

}
