import { Injectable } from '@angular/core';
// import {environment}  from 'src/environments/environment'
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
})

export class VisiteurService {

   apiBaseUrl: string = 'http://localhost:3000';
   noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }


  // listPosteVisiteur() {
  //   return this.http.get(`${this.apiBaseUrl+'/api/pages/ALLPOST'}`);
  // }
  
  listPosteVisiteur(image) {
    var idPages = {
      idUser:image['idfacebook'],
      idpage:image['idpage'],
      

    }

    return this.http.post(`${this.apiBaseUrl}/api/pages/PosteVisiteur`,idPages,{observe: 'response'})
  }
  



  // public supprimer(id):Observable<any> {
  //   console.log(id)
  //   return this.http.delete(`${this.apiBaseUrl}/api/utilisateur/suprimerUtilisateur/${id}`);
  // }

 



 



 
}
