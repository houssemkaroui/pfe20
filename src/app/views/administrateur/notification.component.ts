import { Component,ViewChild,OnInit } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {Utilisateur} from './interface/utilisateur'
import swal from 'sweetalert';
import { MatTableDataSource,MatSort } from '@angular/material';
import {UtilisateurService} from './service/utilisateur.service'
import {SelectionModel} from '@angular/cdk/collections';
import {NotificationService} from './service/notification.service'




@Component({
  templateUrl: 'notification.component.html',
  styleUrls: ['./notification.component.css']


})
export class NotificationComponent   {
  public email_envoyer = {

    id_utilisateurs: [],
    title: '',

    message: '',

   
  }
  private loading: boolean;


  @ViewChild('myModal') public myModal: ModalDirective;
  utilisateurData : any =[];
  constructor(private service:UtilisateurService, private SERVICE:NotificationService) {
    
   }

  listeData: MatTableDataSource<Utilisateur>;
  displayedColumns: string[] = ['select','nom', 'prenom', 'mobile', 'email','adresse','statut'];

  selection = new SelectionModel<Utilisateur>(true, []);

  ngOnInit () {  
    this.getAll();
 
  }


  public getAll () {
    this.service.listUtilisateur().subscribe(Date=> { 
  
      this.utilisateurData = Date;
      this.listeData = new MatTableDataSource<Utilisateur>(this.utilisateurData)
    })
  }

 


 
  
  onchange(e:Event,row) {
   
    var x = this.email_envoyer['id_utilisateurs'].includes(row._id);
     if(e['checked'] == true && x == false) {
      this.email_envoyer['id_utilisateurs'].push(row._id)
     }
     else if(e['checked'] == false  && x == true){
       var pos = this.email_envoyer['id_utilisateurs'].indexOf(row._id)
       this.email_envoyer['id_utilisateurs'].splice(pos,1)
     }
  console.log(this.email_envoyer['id_utilisateurs'])
  }
   
 
 


  public postuler(){
    this.loading = true;
    this.SERVICE.envoyerNotification(this.email_envoyer).subscribe(
      response => {
        //this.loading = false;
        console.log(response)
        swal("Succès", "Vous avez postulé à ");
      },
      error => {
        this.loading = false;
        swal("Erreur", "Erreur durant le traitement", "error");
      }
    )
  }


 

  




}
