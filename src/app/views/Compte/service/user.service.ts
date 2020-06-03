import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
declare const FB: any;
@Injectable({
    providedIn: 'root'
})
export class UserService {
  url; 
  apiBaseUrl: string = 'http://localhost:3000';
   constructor(private http: HttpClient) {
       FB.init({
        appId :  '210687570107622',
        status : false,
        cookie : false,
        xfbml  : false,
        version : 'v4.0'
      });
    }
    fbLogin() {
        return new Promise((resolve, reject) => {
    
          FB.login(result => {
            console.log(result)
              return this.http
                .get(`http://localhost:3000/auth/facebook/callback`)
                
                .toPromise()
                .then(response => {
                  console.log(response)
                const token = response;
                if (token) {
                  localStorage.setItem('id_token', JSON.stringify(token));
                }
                resolve(response);
                })
                .catch(() => reject());
           
        }, { scope: 'public_profile,email' });
    });
  }





  Savesresponse(responce)    
  {    
    this.url =  'http://localhost:3000/auth/facebook/callback';    
    return this.http.get(this.url,responce);    
  }    
}
