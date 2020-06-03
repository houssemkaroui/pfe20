import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosteComponent } from './poste.component';

const routes: Routes = [
  {
    path: '',
    component: PosteComponent,
    data: {
      title: 'Postes'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostesRoutingModule {}
