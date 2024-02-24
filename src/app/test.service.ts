import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class  TestService{

  url = 'https://api.quotable.io/random';
  myVariable: boolean = false;
  constructor(public http : HttpClient ) { }

  getval() {
   return this.http.get(this.url);
  }
  changeval(val: boolean) {
    this.myVariable = val;
  }

  getMyVariable() {
    console.log(this.myVariable)
    return this.myVariable;
  }
}
