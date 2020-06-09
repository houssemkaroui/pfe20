import { Component,ViewChild } from '@angular/core';
import {CommentaireService} from'./services/commentaire.service';
import {Commentaire} from'./interface/commnetaire'
import { from } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import swal from 'sweetalert';
import {SelectionModel} from '@angular/cdk/collections';
import {ModalDirective} from 'ngx-bootstrap/modal';
@Component({
  templateUrl: './commnetaire.component.html',
  styleUrls: ['./commentaire.component.css']
  
})
export class CommentaireComponent {
  public reponseCommentaire = {
    idCommenatire:[],
    idposte:'',
    message:''
  }
  public poste = {
    idPost:'',
    Token:'',
    
  }
  public comm = {
    idposte:'',
    idCommentaire:'',
    Token:''
    
  }

  commentaire = new Commentaire ();
 
   utilisateurData : any =[];
   @ViewChild('myModal') public myModal: ModalDirective;
   constructor(private service:CommentaireService) { }

   

  listeData: MatTableDataSource<Commentaire>;
  displayedColumns: string[] = ['select','idCommentaire', 'message', 'dateDeCreations','Options'];
  selection = new SelectionModel<Commentaire>(true, []);

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

    
    this.comm.idCommentaire = e.idCommentaire
    console.log(e.idCommentaire)
    this.comm.idposte = JSON.parse(sessionStorage.getItem("idposteee"));
    this.service.SupprimerCommenatier(this.comm).subscribe(Date =>{
      this.getAll()
      swal("Succès! Commentaire  été supprimé");
      
    })


  }

  checkcommentaire (row) {
    //this.reponseCommentaire.idCommenatire = row.idCommentaire
    this.reponseCommentaire['idCommenatire'].push(row.idCommentaire)
    this.reponseCommentaire.idposte = JSON.parse(sessionStorage.getItem("idposteee"));
    console.log(this.reponseCommentaire.idCommenatire)

  }

  Publier( ) {
    this.service.reepondreCommentaire(this.reponseCommentaire).subscribe(
      data =>{
        console.log(data)
       swal("Succès! Poste Commenter");
      // this.getAll()
       
      }
     
    ),
    error => {swal("Erreur", "Erreur pendant le traitement ! Merci d'essayer de nouveau", "error");};
  }


  

}
