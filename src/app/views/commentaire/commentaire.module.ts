// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material'

import {MatCheckboxModule} from '@angular/material/checkbox';


import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {CommentaireComponent} from './commentaire.component'

import { CommentaireRoutingModule } from './commentaire-routing.module';
import { from } from 'rxjs';
import {MatIconModule} from '@angular/material/icon'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CommentaireRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule
    

  ],
  declarations: [
   
    CommentaireComponent
  ]
})
export class VisiteurModule { }
