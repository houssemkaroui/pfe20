// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material'



import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {VisiteurComponent} from './visiteur.component'
import {MatIconModule} from '@angular/material/icon'

import { VisiteurRoutingModule } from './visiteur-routing.module';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VisiteurRoutingModule,
    MatTableModule,
    MatIconModule

  ],
  declarations: [
   
    VisiteurComponent
  ]
})
export class VisiteurModule { }
