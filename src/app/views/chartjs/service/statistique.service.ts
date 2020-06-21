import { Injectable ,} from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class StatestiqueService {
  apiBaseUrl: string = 'http://localhost:3000';
   constructor(private http: HttpClient) {}
   
   GetStatestique(statetestique) {
       var statPage ={
        idUser:statetestique['idUser'],
        idpage:statetestique['idpage']
        
       }

    return this.http.post(`${this.apiBaseUrl}/api/statestique/LikePersone`,statPage, {observe :'response'});
       
  }

  getStatestique(stat) {
    var state = {
      idUser:stat['idUser'],
      idpage:stat['idpage']
    }

    return this.http.post(`${this.apiBaseUrl}/api/statestique/ViewTotale`,state, {observe :'response'});

  }


  

 

 
}
