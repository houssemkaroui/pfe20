import { Component } from '@angular/core';
import {PostesService} from './services/postes.service';
import { Postes} from './interfaces/postes'
import { MatTableDataSource } from '@angular/material';
;
@Component({ 
  templateUrl: 'poste.component.html',
  styleUrls: ['./poste.coponent.css']
})
export class PosteComponent {
 postes = new Postes()
 PostesData : any =[];
  constructor(private service: PostesService) {}

  listeData: MatTableDataSource<Postes>;
  displayedColumns: string[] = ['idPost', 'message', 'DateDePublication', 'published','Options'];

  ngOnInit () {  
    this.getAll();
    //this.id = this.route.snapshot.params['id'];
 
  }

  public getAll () {
    this.service.listPoste().subscribe(Date=> { 
      console.log(Date)
  
      this.PostesData = Date;
      this.listeData = new MatTableDataSource<Postes>(this.PostesData)
    })
  }


}
