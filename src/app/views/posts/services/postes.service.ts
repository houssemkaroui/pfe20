import { Injectable } from '@angular/core';
// import {environment}  from 'src/environments/environment'
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {Postes} from '../interfaces/postes'
import { Observable,throwError } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
})

export class PostesService {

  private postes: Postes;
   apiBaseUrl: string = 'http://localhost:3000';
   noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }


  listPoste() {
    return this.http.get(`${this.apiBaseUrl+'/api/pages/ALLPOST'}`);
  }
  
  
  



  public supprimer(id):Observable<any> {
    console.log(id)
    return this.http.delete(`${this.apiBaseUrl}/api/utilisateur/suprimerUtilisateur/${id}`);
  }

 



 



 
}
