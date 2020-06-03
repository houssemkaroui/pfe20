


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VisiteurComponent} from './visiteur.component'


const routes: Routes = [
  {
    path: '',
    component: VisiteurComponent,
    data: {
      title: 'Visiteur'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisiteurRoutingModule {}
