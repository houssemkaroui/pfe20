


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommentaireComponent} from './commentaire.component'


const routes: Routes = [
  {
    path: '',
    component: CommentaireComponent,
    data: {
      title: 'Commentaire'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentaireRoutingModule {}
