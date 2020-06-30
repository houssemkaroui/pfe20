import { Component } from '@angular/core';
import {PostesService} from './services/postes.service';
import { Postes} from './interfaces/postes'
import { MatTableDataSource } from '@angular/material';
import swal from 'sweetalert';

;
@Component({ 
  templateUrl: 'poste.component.html',
  styleUrls: ['./poste.coponent.css']
})
export class PosteComponent {
  public poste = {
    idPost:'',
    Token:''
  }
 postes = new Postes()
 PostesData : any =[];
  constructor(private service: PostesService) {}

  listeData: MatTableDataSource<Postes>;
  displayedColumns: string[] = ['idPost', 'message', 'DateDePublication', 'published','Options','Commentaire'];

  ngOnInit () {  
    this.getAll();
 
  }

  public getAll () {
    this.service.listPoste().subscribe(Date=> { 
      this.PostesData = Date;
      this.listeData = new MatTableDataSource<Postes>(this.PostesData)
      this.PostesData.forEach(element => {
        console.log(element.DateDePublication)
        if(element.DateDePublication != null) 

         element.DateDePublication = new window.Date(element.DateDePublication).toUTCString()

        
      });
      
    })
  }


  supprimerPoste(index:number ,e) {
    var x = e.idPost.substr(0,15)
    var p = JSON.parse(sessionStorage.getItem("houssem"));
    this.poste.idPost = e.idPost;
    
     for(let i =0;i<p.length;i++) {
       if((p[i].idPage) == (x)){
        
         this.poste.Token = p[i].accessToken
       }
     }
     this.service.suprimer(this.poste).subscribe(
      data =>{
        console.log(data)
       swal("Succès! Poste  été supprimé");
       this.getAll()
       //this.grid.refresh();
      }
     
    ),
    error => {swal("Erreur", "Erreur pendant le traitement ! Merci d'essayer de nouveau", "error");};
     
  }


  Commentaire(element) {
    //console.log(element)

    var x = element.idPost.substr(0,15)
    var p = JSON.parse(sessionStorage.getItem("houssem"));
    
    sessionStorage.setItem('idposteee',JSON.stringify(element.idPost))  
    
    for(let i=0;i<p.length;i++){
      if ((p[i].idPage)==(x)) {
        
        sessionStorage.setItem('tokenn',JSON.stringify(p[i].accessToken))  
     
      }

    }
   


  }


}
