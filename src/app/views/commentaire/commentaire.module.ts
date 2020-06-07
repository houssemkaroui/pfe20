// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material'



import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {CommentaireComponent} from './commentaire.component'

import { CommentaireRoutingModule } from './commentaire-routing.module';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CommentaireRoutingModule,
    MatTableModule,
    

  ],
  declarations: [
   
    CommentaireComponent
  ]
})
export class VisiteurModule { }
