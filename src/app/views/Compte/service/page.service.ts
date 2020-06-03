import { Injectable ,} from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class PageService {
  apiBaseUrl: string = 'http://localhost:3000';
   constructor(private http: HttpClient) {}
   
   GetPage(idfa) {
       var idUtilisateur ={
        idUSER:idfa['idfacebook'],
        accessToken:idfa['tokenuser']
        
       }

    return this.http.post(`${this.apiBaseUrl}/api/pages/regesterPages`,idUtilisateur, {observe :'response'});
       
  }


  PosteMessage(message) {
    var idPages = {
      idpages:message['idpage'],
      idUser:message['idfacebook'],
      message:message['message'],
      published:message['published'],
      DateDePublication:message['DateDePublication']
    }

    return this.http.post(`${this.apiBaseUrl}/api/pages/postPageMessage`,idPages, {observe :'response'})
  }

  PosteImage(image) {
    var idPages = {
      idUser:image['idfacebook'],
      idpages:image['idpage'],
      message:image['message'],
      published:image['published'],
      DateDePublication:image['DateDePublication'],
      image:image['image']

    }

    return this.http.post(`${this.apiBaseUrl}/api/pages/postPageMessagePhoto`,idPages,{observe: 'response'})
  }

 
}
