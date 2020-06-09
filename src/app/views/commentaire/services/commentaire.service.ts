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

export class CommentaireService {

   apiBaseUrl: string = 'http://localhost:3000';
   noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }


  listUtilisateur() {
    return this.http.get(`${this.apiBaseUrl+'/api/utilisateur/AllUtilisateur'}`);
  }
  
  
  GetCommentPoste (comments) {
    var COMMENTAISE = {
      idPost:comments['idPost'],
      Token:comments['Token']
    }

    return this.http.post(`${this.apiBaseUrl}/api/commentaire/comm`,COMMENTAISE,{observe: 'response'})
  }


  SupprimerCommenatier (comments) {
    var commmm = {
      idCommentaire:comments['idCommentaire'],
      idposte:comments['idposte']
    }

    return this.http.post (`${this.apiBaseUrl}/api/commentaire/deletecommentaire`,commmm,{observe: 'response'})
  }


  reepondreCommentaire (poste) {
    var postecommentaire = {
      idCommenatire:poste['idCommenatire'],
      idposte:poste['idposte'],
      message:poste['message'],
      

    }
    return this.http.post(`${this.apiBaseUrl}/api/commentaire/comenttposte`,postecommentaire,{observe: 'response'})

  }



  




 



 
}
