import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone:true,
  imports: [],
})
export class LoginComponent {
  val : boolean = false
  changeval : boolean = false;
  constructor( private router : Router, private service : TestService){

    this.val = this.service.getMyVariable();
  }
  login() {
this.router.navigateByUrl('/landing')
  }
  changebool(){ 
    this.val = !this.val;
    this.service.changeval(this.val);
  }
}
