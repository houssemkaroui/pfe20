import { Component } from '@angular/core';
import {Router} from '@angular/router'
import swal from 'sweetalert';

import { AdminService } from '../register/service/admin.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
  private admin: Object;
  constructor(private router: Router, private service:AdminService) {
    this.admin = {
      email:'',
      password:''
    }
  }

  redirection () {
    this.router.navigate(['register']);

  }



 public singIN () {
    this.service._login(this.admin).subscribe(response=>{
      console.log(response)

      if(response.body['success'] == true){
        this.service.setToken(response.body["token"]);
        this.router.navigate(['dashboard']);
      }else{
        swal("Erreur", "Nom d'utilisateur ou mot de passe est invalide !", "error");
        this.admin['email']='';
        this.admin['password']='';
      }
    },
    error =>{
      //this.loading = false;
      swal("Erreur", "Nom d'utilisateur ou mot de passe est invalide !", "error");
      this.admin['email']='';
      this.admin['password']='';
    }
    )
  }


}
