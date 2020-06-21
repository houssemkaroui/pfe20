import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatestiquePages} from './statestiquePage.component'
//import { ChartJSComponent } from './chartjs.component'; 
import {StatestiquePoste} from './statestiquePoste.component'
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Charts'
    },
    children: [
     
      {
        path: 'Pages',
        component: StatestiquePages,
        data: {
          title: 'Pages'
        }
      },
      {
        path: 'Poste',
        component: StatestiquePoste,
        data: {
          title: 'Poste'
        }
      },
    

  

 

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartJSRoutingModule {}
