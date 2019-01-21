import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';


import { User} from './login.model' ;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User ; 
  loginForm:FormGroup ;

  constructor() {
    this.user = new User(); 
    
   }

  ngOnInit() {
  }

  save(loginForm:NgForm) : void { 
    console.log(loginForm) ;
  }

}
