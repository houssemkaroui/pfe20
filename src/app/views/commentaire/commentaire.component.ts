import { Component } from '@angular/core';
import {CommentaireService} from'./services/commentaire.service';
import {Commentaire} from'./interface/commnetaire'
import { from } from 'rxjs';
import { MatTableDataSource } from '@angular/material';

@Component({
  templateUrl: './commnetaire.component.html',
  styleUrls: ['./commentaire.component.css']
  
})
export class CommentaireComponent {
  //utilisateur: Utilisateur;
  commentaire = new Commentaire ();
  // articleForm: FormGroup;
   utilisateurData : any =[];
   constructor(private service:CommentaireService) { }

   

  listeData: MatTableDataSource<Commentaire>;
  displayedColumns: string[] = ['idCommentaire', 'message', 'dateDeCreations'];
  ngOnInit () {  
    //this.getAll();
 
 
  }

  // public getAll () {
  //   this.service.listUtilisateur().subscribe(Date=> { 
  
  //     this.utilisateurData = Date;
  //     this.listeData = new MatTableDataSource<Utilisateur>(this.utilisateurData)
  //   })
  // }


  

}
