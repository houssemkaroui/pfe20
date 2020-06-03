import { Component } from '@angular/core';
import {AdminService} from '../register/service/admin.service'
import { Admin } from './interface/admin';
import {Router} from '@angular/router'
import swal from 'sweetalert';
import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  admin = new Admin ()

  constructor(private service :AdminService, private router :Router ) { }
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  addAdmin() {
    this.save();
  }
  private save(): void {
   this.service.addAdmin(this.admin)
       .subscribe(
 
       data =>{
        console.log(data)
        if(data["success"]== true) {
         
          swal("Succès", data["message"], "success");
          this.router.navigate(['login']);
         
        }else{
          swal("Attention", data["message"], "warning");
        }
      },
      error => { swal("Erreur! ", error, "error");}
       );
 }


}
