import { Component,ViewChild } from '@angular/core';
import {Router} from '@angular/router'
import swal from 'sweetalert';
import {Email} from '../register/interface/email'
import { AdminService } from '../register/service/admin.service';
import { from } from 'rxjs';
import {ModalDirective} from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
   email = new Email;
  private admin: Object;
  @ViewChild('myModal') public myModal: ModalDirective;
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

  public ForgetPasswor () {
    this.service.forgetPassword(this.email)
    .subscribe (
 
      data =>{
       console.log(data)
       if(data["success"]== true) {
        
         swal("Succès", data["message"], "success");
        // this.router.navigate(['login']);
        
       }else{
         swal("Attention", data["message"], "warning");
       }
     },
     error => { swal("Erreur! ", error, "error");}
      );
  } 


}
