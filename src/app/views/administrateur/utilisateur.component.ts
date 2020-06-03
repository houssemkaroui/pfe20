import { Component,OnInit,ViewChild } from '@angular/core';
import {UtilisateurService} from './service/utilisateur.service'
import { MatTableDataSource } from '@angular/material';
import {Utilisateur} from './interface/utilisateur'
import swal from 'sweetalert';

import {ModalDirective} from 'ngx-bootstrap/modal';

import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements  OnInit  {
  id: number;
 // utilisateur: Utilisateur;
  utilisateur = new Utilisateur ();
   submitted = false;
  message: string;
  // articleForm: FormGroup;
   isLoadingResults = false;
   utilisateurData : any =[];
   @ViewChild('myModal') public myModal: ModalDirective;

  constructor( private service:UtilisateurService, private router:Router,private route: ActivatedRoute) {

   }

  listeData: MatTableDataSource<Utilisateur>;
  displayedColumns: string[] = ['nom', 'prenom', 'mobile', 'email','adresse','statut','Options'];
  ngOnInit () {  
    this.getAll();
    this.id = this.route.snapshot.params['id'];
 
  }

  public getAll () {
    this.service.listUtilisateur().subscribe(Date=> { 
  
      this.utilisateurData = Date;
      this.listeData = new MatTableDataSource<Utilisateur>(this.utilisateurData)
    })
  }

  addUtlisateur() {
    this.submitted = true;
    this.save();
  }
  private save(): void {
   this.service.addUtlisateur(this.utilisateur)
       .subscribe(
         res => {
                  this.isLoadingResults = false;
                 swal("Succès! Utilisateur  été Ajouter");
                 this.getAll();
               this.router.navigate(['/administrateur/utilisateur']);
         },
         err => {swal("Erreur", "Erreur pendant le traitement ! Merci d'essayer de nouveau", "error");
       }
       );
 }


  supprimerUtlisateur (index: number, e){
    console.log(this.utilisateur._id)
    this.service.supprimer(e._id).subscribe(
      data =>{
        console.log(data)
        swal("Succès! Utilisateur  été supprimé");
        this.getAll()
       // this.grid.refresh();
      }
     
    ),
    error => {swal("Erreur", "Erreur pendant le traitement ! Merci d'essayer de nouveau", "error");};
     
  }


//   update(): void {
//    // this.submitted = true;
//    console.log(this.utilisateur._id)
   
//     this.service.updateUtilisateur(this.utilisateur._id)
//         .subscribe(
//           res => {
//             this.isLoadingResults = false;
//             console.log(res)
//            swal("Succès! Utilisateur  été Modifer");
//            this.getAll();
//    },
//    err => {swal("Erreur", "Erreur pendant le traitement ! Merci d'essayer de nouveau", "error");
//  }
//         );
//   }
  

updateEmployee() {
  console.log(this.id)
  this.service.modifierTalent(this.id, this.utilisateur)
    .subscribe(data => console.log(data), error => console.log(error));
  this.utilisateur = new Utilisateur();
}

onSubmit() {
  this.updateEmployee();    
}
  



}

