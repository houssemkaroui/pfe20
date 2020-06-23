import {Component } from '@angular/core';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  imegUser : any ='';

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  ngOnInit(): void {
   var img = JSON.parse(sessionStorage.getItem("socialusers"));
   
 
    this.imegUser=img.image
    console.log(this.imegUser)

  }
    // generate random values for mainChart
    

  
}
