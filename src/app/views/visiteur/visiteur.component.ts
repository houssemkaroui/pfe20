import { Component,OnInit } from '@angular/core';
import {VisiteurService} from './service/visiteur.service'
import { from } from 'rxjs';
import {PosteVisiteur} from'./interface/PosteVisiteur';
import { MatTableDataSource } from '@angular/material';

@Component({ 
  templateUrl: 'visiteur.component.html',
  styleUrls: ['./component.visiteur.css']
})
export class VisiteurComponent implements  OnInit {

  Visiteur = new PosteVisiteur()

  VisiteurData : any =[];

  constructor(private service:VisiteurService) {}
  listeData: MatTableDataSource<PosteVisiteur>;
  displayedColumns: string[] = ['IdPost', 'message', 'DateDeCreaction','Options'];
  

  ngOnInit () {

    var p = JSON.parse(sessionStorage.getItem("salim"));
    //console.log(p)
     this.VisiteurData = p.donnes ;
         console.log( this.VisiteurData)
    this.listeData = new MatTableDataSource<PosteVisiteur>(this.VisiteurData)

  }
  //public Publier (): void {
 

}
