import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UtilisateurComponent} from './utilisateur.component';
import {NotificationComponent} from './notification.component';
import {FBSettingComponent} from './FBSetting.component';

const routes: Routes = [
    {
      path: '',
      data: {
        title: 'Administrateur'
      },
      children: [
        // {
        //   path: '',
        //   redirectTo: 'utilisateur'
        // },
        {
          path: 'utilisateur',
          component: UtilisateurComponent,
          data: {
            title: 'Utilisateur'
          }
        },
        {
          path: 'Send Notification',
          component: NotificationComponent,
          data: {
            title: 'Send Notification'
          }
        },
        {
          path:'FB Setting',
          component :FBSettingComponent,
          data : {
            title:'FB Setting'
          }
        }
  
    
  
   
  
      ]
    }
  ];




@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdministrateurRoutingModule {}
  