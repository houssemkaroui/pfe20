import { Component,OnInit,ViewChild } from '@angular/core';
import {UtilisateurService} from './service/utilisateur.service'
import { MatTableDataSource } from '@angular/material';
import {Utilisateur} from './interface/utilisateur'
import swal from 'sweetalert';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';

import {ModalDirective} from 'ngx-bootstrap/modal';

import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements  OnInit  {
  form = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    // password: new FormControl('', [
    //   Validators.required,
    //   Validators.minLength(6)
    // ])
    
   });
  id: number;
  currentTutorial = null;
 // utilisateur: Utilisateur;
  utilisateur = new Utilisateur ();
   submitted = false;
  message: string;
  private selectedOffre: Object;
  // articleForm: FormGroup;
   isLoadingResults = false;
   utilisateurData : any =[];
   @ViewChild('myModal') public myModal: ModalDirective;
   apiBaseUrl: string = 'http://localhost:3000';
  constructor( private service:UtilisateurService, private router:Router,private route: ActivatedRoute,private http: HttpClient) {
    this.selectedOffre = { nom: '', prenom: '', mobile: '',email:'' ,adresse: '',statut:''};
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

  // addUtlisateur() {
  //   this.submitted = true;
  //   this.save();
  // }
  addUtlisateur( form: NgForm): void {
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
  
    this.service.supprimer(e._id).subscribe(
      data =>{
   
        swal("Succès! Utilisateur  été supprimé");
        this.getAll()
       // this.grid.refresh();
      }
     
    ),
    error => {swal("Erreur", "Erreur pendant le traitement ! Merci d'essayer de nouveau", "error");};
     
  }


//   update(): void {
//     const data = {
//       statut: this.currentTutorial.statut,
//       nom: this.currentTutorial.nom,
//       prenom:this.currentTutorial. prenom,
//       mobile:this.currentTutorial. mobile,
//       email:this.currentTutorial. email,
//       adresse:this.currentTutorial. adresse
      
//     };
//    // this.submitted = true;
//    console.log(this.utilisateur._id)
   
//     this.service.modifierTalent(this.utilisateur._id)
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
  


public updateOffre(): void {
 // this.loading = true;
  this.service.updateOffre(this.selectedOffre).subscribe(
    data =>{
      console.log(data)
      //this.loading = false;
      swal("Succès", "Une offre a été modifié avec succes!", "success");
     
    },
    error => {
      //this.loading = false;
      swal("Erreur !", "Erreur de mise à jour de l'offre!", "error");
    }
)
}



}

