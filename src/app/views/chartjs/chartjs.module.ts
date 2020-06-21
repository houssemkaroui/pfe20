import { NgModule } from '@angular/core';
//import { ChartsModule } from 'ng2-charts';
import {StatestiquePages} from './statestiquePage.component'
import {StatestiquePoste} from './statestiquePoste.component'
import { ChartJSRoutingModule } from './chartjs-routing.module';
import { from } from 'rxjs';
import { ChartsModule } from 'ng2-charts';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {StatestiqueService} from '../chartjs/service/statistique.service'
@NgModule({
  imports: [
    ChartJSRoutingModule,
   // ChartsModule,
   ChartsModule,
   ButtonsModule.forRoot()
   
  ],
  declarations: [  StatestiquePages,
    StatestiquePoste ],
    providers:[
      StatestiqueService
    ],
})
export class ChartJSModule { }
