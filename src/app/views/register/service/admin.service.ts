import { Injectable } from '@angular/core';
// import {environment}  from 'src/environments/environment'
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable,throwError, from } from 'rxjs';
import {Admin} from '../interface/admin'
import * as jwt_decode from "jwt-decode";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
})

export class AdminService {

   private admin: Admin;
    apiBaseUrl: string = 'http://localhost:3000/api/admin/register';
    apibasel : String = 'http://localhost:3000'
   constructor(private http: HttpClient) { }


  addAdmin (admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.apiBaseUrl, admin);
  }
  



  public _login(admin){
    return this.http.post(`${this.apibasel}/api/admin/login`, admin, {observe :'response'});
  }

  public setToken(token) {
    localStorage.setItem("token",token);
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public loggedIn() {
    return !!localStorage.getItem('token');
  }

  public logout() {
    localStorage.removeItem('token')
    //this.router.navigate(['/tsunamit/login'])
  }

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }


  verifyToken(){

    let tokenInfo =  this.getDecodedAccessToken(this.getToken());

    if(tokenInfo != null && tokenInfo.type =="admin"){
      let expireDate = tokenInfo.exp; // get token expiration dateTime
      return true;
    }else{
      this.logout();
      return false;
    }
  }


  getTokenExpirationDate(token: string): Date {
    token = this.getToken()
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) token = this.getToken();
    if (!token) return true;

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }


  // getUserInfo(){
  //   let authService =  this.injector.get(TalentAuthService)
  //   let tokenInfo =  authService.getDecodedAccessToken(authService.getToken());
  //   return tokenInfo.data;
  // }




 



 
}
