import { NgModule } from '@angular/core';

import { PosteComponent } from './poste.component';
import { PostesRoutingModule } from './poste-routing.module';
import {MatTableModule,MatButtonModule,MatGridListModule,MatFormFieldModule,MatCheckboxModule,MatNativeDateModule ,MatDatepickerModule,MatSelectModule  } from '@angular/material'
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  imports: [
    PostesRoutingModule,
    MatTableModule,
    MatIconModule
  
  ],
  declarations: [ PosteComponent ]
})
export class PosteModule { }
