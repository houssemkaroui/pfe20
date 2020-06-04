import { Component,OnInit } from '@angular/core';
import {VisiteurService} from './service/visiteur.service'
import { from } from 'rxjs';
import {PosteVisiteur} from'./interface/PosteVisiteur';
import { MatTableDataSource } from '@angular/material';
import swal from 'sweetalert';

@Component({ 
  templateUrl: 'visiteur.component.html',
  styleUrls: ['./component.visiteur.css']
})
export class VisiteurComponent implements  OnInit {
 idpage:''
 public PosteVisiteur = {


  IDpage: '',

  idPoste: '',

 
}
  Visiteur = new PosteVisiteur()

  VisiteurData : any =[];

  constructor(private service:VisiteurService) {}
  listeData: MatTableDataSource<PosteVisiteur>;
  displayedColumns: string[] = ['IdPost', 'message', 'DateDeCreaction','Options'];
  

  ngOnInit () {

    var p = JSON.parse(sessionStorage.getItem("salim"));
    //console.log(p)
     this.VisiteurData = p.donnes ;
         console.log( p.idpage)
    this.listeData = new MatTableDataSource<PosteVisiteur>(this.VisiteurData)
    

  }
  
  //public Publier (): void {s

    supprimerPosteVisiteur (index: number, e){
     // console.log(e.IdPost)
      this.PosteVisiteur.idPoste = e.IdPost
      var p = JSON.parse(sessionStorage.getItem("salim"));
     // this.idpage = p.idpage
      this.PosteVisiteur.IDpage = p.idpage

     
      this.service.suprimer(this.PosteVisiteur).subscribe(
        data =>{
          console.log(data)
         swal("Succès! Poste  été supprimé");
         //this.getAll()
         //this.grid.refresh();
        }
       
      ),
      error => {swal("Erreur", "Erreur pendant le traitement ! Merci d'essayer de nouveau", "error");};
       
    }
 

}
