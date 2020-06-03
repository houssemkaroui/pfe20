import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../register/service/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate  {

  constructor(private service: AdminService, private router: Router){}

  canActivate(): boolean {
    if(this.service.loggedIn() && this.service.verifyToken()){
        console.log('ok')
      return true;
  
    }else {
      this.router.navigate(['login']);
      console.log('err')
      return false;
    }
  }
}
