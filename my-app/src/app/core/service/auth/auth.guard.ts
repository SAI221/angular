import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthGuard implements CanActivate  {
  constructor(private userService: UserService, private router: Router) { }
  canActivate(): boolean {
    if (this.userService.logged()) {
      return true;
     } else {
       this.router.navigate(['/login']);
     }
  }
}
