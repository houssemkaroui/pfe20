import { Injectable } from '@angular/core';
// import {environment}  from 'src/environments/environment'
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {Utilisateur} from '../interface/utilisateur'
import { Observable,throwError } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
})

export class UtilisateurService {

  private utilisateur: Utilisateur;
   apiBaseUrl: string = 'http://localhost:3000';
   aaa: string  = 'http://localhost:3000/api/utilisateur/PostUtilisateur'
   noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }


  listUtilisateur() {
    return this.http.get(`${this.apiBaseUrl+'/api/utilisateur/AllUtilisateur'}`);
  }
  
  
  addUtlisateur (utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.aaa, utilisateur, httpOptions);
  }



  public supprimer(id):Observable<any> {
    console.log(id)
    return this.http.delete(`${this.apiBaseUrl}/api/utilisateur/suprimerUtilisateur/${id}`);
  }

  public modifierTalent(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.apiBaseUrl}/${id}`, value);
  
  }




 



 
}
