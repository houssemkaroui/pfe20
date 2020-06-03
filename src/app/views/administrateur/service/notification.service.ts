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

export class NotificationService {

  
   apiBaseUrl: string = 'http://localhost:3000';
   
   noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  public envoyerNotification(email){
    var contenu_email= {
        idUtilisateurs: email['id_utilisateurs'],
        title: email['title'],
        message: email['message'],
    }

    return this.http.post(`${this.apiBaseUrl}/api/annonce/postuler`,contenu_email, {observe :'response'}); 
  }

  




 



 
}
