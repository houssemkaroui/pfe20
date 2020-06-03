import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import {MatDialogModule} from'@angular/material'
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UtilisateurComponent} from './utilisateur.component';
import {NotificationComponent} from './notification.component';
import {FBSettingComponent} from './FBSetting.component'
import {MatTableModule,MatButtonModule,MatGridListModule,MatFormFieldModule,MatCheckboxModule,MatNativeDateModule ,MatDatepickerModule,MatSelectModule  } from '@angular/material'
import { AdministrateurRoutingModule } from './administrateur-routing.module';
import { from } from 'rxjs';
// import { BrowserModule } from '@angular/platform-browser';
// import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'

import {UtilisateurService} from './service/utilisateur.service'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      AdministrateurRoutingModule,
      MatTableModule,
      MatInputModule,
      MatIconModule,
      MatButtonModule,
      MatDialogModule,
      MatGridListModule,
      MatFormFieldModule,
      MatCheckboxModule ,
      HttpClientModule,
      ReactiveFormsModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatCardModule,
      MatRadioModule,
    
      MDBBootstrapModule.forRoot()
      
    
    ],
    declarations: [
        UtilisateurComponent,
        NotificationComponent,
        FBSettingComponent,
        
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers:[
      UtilisateurService
    ],
  })
  export class AdministrateurModule { }
  
