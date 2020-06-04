import { Component, OnInit,ViewChild } from '@angular/core';
import {UserService} from './service/user.service'
import { MatTableDataSource,MatSort } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {ModalDirective} from 'ngx-bootstrap/modal';
import swal from 'sweetalert';

import {User} from './interface/user'
import { FacebookLoginProvider, AuthService ,SocialUser} from 'angular-6-social-login';  
import {PageService} from'./service/page.service'
import {Pages} from './interface/page'
import { Router, Params } from '@angular/router';
import {VisiteurService} from '../visiteur/service/visiteur.service'
import { from } from 'rxjs';
@Component({
  templateUrl: 'compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
 selectes = ["true","false"]
public PosteVisiteur = {
  idfacebook:'',
  idpage:''
}
  public Postes ={
    idpage:[],
    idfacebook:'',
    message:'',
    published:'',
    DateDePublication:'',
    image:''
  }
  
  public PAGES = {
    idfacebook:'',
    tokenuser:''
  }
  pages = new Pages()
  private loggedIn: boolean;
  response;
  user = new User ();
  utilisateurData : any =[];
  @ViewChild('myModal') public myModal: ModalDirective;
  constructor(private service :UserService,public OAuth: AuthService,private page:PageService,private router:Router,private visiteur : VisiteurService){}

  ngOnInit() {
 
    var p = JSON.parse(sessionStorage.getItem("houssem"));
    //console.log(p)
     this.utilisateurData = p ;
         
    this.listeData = new MatTableDataSource<Pages>(this.utilisateurData)

   


  }

  listeData: MatTableDataSource<Pages>;
  displayedColumns: string[] = ['select','namePage', 'idPage','Poste Visiteur'];
  selection = new SelectionModel<Pages>(true, []);

  public socialSignIn(socialProvider: string) {    
    let socialPlatformProvider;    
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;    
    this.OAuth.signIn(socialPlatformProvider).then(user => {    
      this.Savesresponse(this.user);
      this.loggedIn = (user != null);
      this.PAGES.idfacebook = user.id
      this.PAGES.tokenuser = user.token
      sessionStorage.setItem('socialusers', JSON.stringify( user)); 

      this.page.GetPage(this.PAGES).subscribe((HttpResponse) =>{
          
        sessionStorage.setItem('houssem',JSON.stringify(HttpResponse.body))  
      }) 
    });   
  }    
  Savesresponse(user: User) {    
    this.service.Savesresponse(user).subscribe((res: any) => {    
      debugger;    
     // console.log(res);    
      this.user=res;    
      this.response = res.userDetail;    
     
    })    
  }    

  onchange(row) {
    this.Postes['idpage'].push(row.idPage)
    console.log(this.Postes['idpage'])
    var id = JSON.parse(sessionStorage.getItem("socialusers"));
    this.Postes['idfacebook'] = id.id 
 

  }

  public Publier (): void {
    this.page.PosteMessage(this.Postes).subscribe(
     
        response => {
          //this.loading = false;
          console.log(response)
          swal("Succès", "Message Publier");
          this.router.navigate(['/postePages']);
        },
        error => {
         // this.loading = false;
          swal("Erreur", "Erreur durant la Publication", "error");
        }
      )

    

  }

  onFileChange(event){
    console.log(event.target.files[0].name)
    // if (event.target.files && event.target.files[0]) {
    //   const file = event.target.files[0];
       this.Postes["image"] =  event.target.files[0].name;
    //   //this.readyToUpload = true;
    // }else {
    //  //this.readyToUpload = false;
    // }
  }

  public PublierImage () : void {
    this.page.PosteImage(this.Postes).subscribe(
      response =>{
        console.log(response);
        swal("Succès", "Image Publier")
      },
      error =>{
        swal("Erreur", "Erreur durant la Pubilication", "error")
      }
    )
  }

  // public azer () : void {
  //   this.visiteur.listPosteVisiteur
  // }


  azer(element) {
    var id = JSON.parse(sessionStorage.getItem("socialusers"));
    this.PosteVisiteur["idfacebook"] = id.id 
    this.PosteVisiteur["idpage"] = element.idPage
    //console.log(this.PosteVisiteur["idpage"])
    this.visiteur.listPosteVisiteur(this.PosteVisiteur).subscribe(HttpResponse=> { 
     // console.log(HttpResponse.body)
      sessionStorage.setItem("salim",JSON.stringify(HttpResponse.body)) 
      // this.utilisateurData = Date;
      // this.listeData = new MatTableDataSource<Utilisateur>(this.utilisateurData)
    })
  }

  

 // public getAll () {
    
 
}
