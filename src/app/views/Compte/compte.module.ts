import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { CompteComponent } from './compte.component';
import { CompteRoutingModule } from './compte-routing.module';
import {MatCardModule} from '@angular/material/card';
import {UserService} from './service/user.service'

import {  FacebookLoginProvider, AuthService } from 'angular-6-social-login';  
import { SocialLoginModule, AuthServiceConfig } from 'angular-6-social-login';  
import {PageService} from './service/page.service'
import { CommonModule } from '@angular/common';  
import {MatIconModule} from '@angular/material/icon'
import { FormsModule }   from '@angular/forms';

import {MatTableModule,MatCheckboxModule, MatSelectModule} from '@angular/material'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

export function socialConfigs() {  
  const config = new AuthServiceConfig(  
    [  
      {  
        id: FacebookLoginProvider.PROVIDER_ID,  
        provider: new FacebookLoginProvider('210687570107622')  
      }
   
    ]  
  );  
  return config;  
}  



@NgModule({
  imports: [
    CompteRoutingModule,
    ChartsModule,
    BsDropdownModule,
    MatCardModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [ CompteComponent ],
  providers:[
    UserService,
    AuthService,
    PageService,
    
    {  
      
      provide: AuthServiceConfig,
      useFactory: socialConfigs  
    }  
  ],
})
export class CompteModule { }
