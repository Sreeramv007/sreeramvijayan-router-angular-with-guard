import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Router, RouterOutlet } from '@angular/router';
import { ChildComponent } from "../child/child.component";

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css'],
    standalone: true,
    imports: [RouterOutlet,MatToolbarModule, MatButtonModule, MatIconModule]
})
export class TestComponent implements OnInit{
  authorName: any ='';

  url = 'https://api.quotable.io/random';
  constructor(public service :  TestService, private router : Router) {

  }
  ngOnInit(){
 this.getval();
  }

  getval(){
this.service.getval().subscribe(res => {
  console.log(res);
  this.authorName = res
}, err=> 
console.log(err))
  }
  logout(){
    this.router.navigateByUrl('/');
    // this.service.changeval(false);
  }
}
