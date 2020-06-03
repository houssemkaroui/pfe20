import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate  {

  constructor(private service: UserService, private router: Router){}

  canActivate(): boolean {
    this.service.isLoggedIn().then(() => {
        resolve(true);
    }).catch(() => {
        this.router.navigate(['/welcome']);
        reject(false);
    });
  });
  }
}
