import { Component } from '@angular/core';
import {CommentaireService} from'./services/commentaire.service';
import {Commentaire} from'./interface/commnetaire'
import { from } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import swal from 'sweetalert';

@Component({
  templateUrl: './commnetaire.component.html',
  styleUrls: ['./commentaire.component.css']
  
})
export class CommentaireComponent {
  public poste = {
    idPost:'',
    Token:'',
    
  }
  public comm = {
    idposte:'',
    idCommentaire:'',
    Token:''
    
  }
  //utilisateur: Utilisateur;
  commentaire = new Commentaire ();
  // articleForm: FormGroup;
   utilisateurData : any =[];
   constructor(private service:CommentaireService) { }

   

  listeData: MatTableDataSource<Commentaire>;
  displayedColumns: string[] = ['idCommentaire', 'message', 'dateDeCreations','Options'];
  ngOnInit () {  
    this.getAll();
 
 
  }

  public getAll () {
    this.poste.Token= JSON.parse(sessionStorage.getItem("tokenn"));
    this.poste.idPost = JSON.parse(sessionStorage.getItem("idposteee"));
    this.service.GetCommentPoste(this.poste).subscribe(HttpResponse=> { 
     
      this.utilisateurData = HttpResponse.body;
      this.listeData = new MatTableDataSource<Commentaire>(this.utilisateurData)
     
  
      // this.utilisateurData = Date;
      // this.listeData = new MatTableDataSource<Utilisateur>(this.utilisateurData)
    })
  }
  

  supprimerCommentaire (index:number ,e) {
   // console.log(element.idCommentaire)
    
    this.comm.idCommentaire = e.idCommentaire
    console.log(e.idCommentaire)
    this.comm.idposte = JSON.parse(sessionStorage.getItem("idposteee"));
  //  this.comm.Token = JSON.parse(sessionStorage.getItem("tokenn"));
    this.service.SupprimerCommenatier(this.comm).subscribe(Date =>{
     // console.log(Date)
      swal("Succès! Commentaire  été supprimé");
      this.getAll()
    })


  }
s
}
