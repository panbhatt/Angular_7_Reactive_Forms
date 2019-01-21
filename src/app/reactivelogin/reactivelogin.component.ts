import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from './reactivelogin.model';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactivelogin',
  templateUrl: './reactivelogin.component.html',
  styleUrls: ['./reactivelogin.component.css']
})
export class ReactiveloginComponent implements OnInit {

  user = new User(); // it is actuall not used. 
  loginForm: FormGroup;

  // All the form Controls 
  /*username = new FormControl();
  useremail = new FormControl(); 
  password = new FormControl(); 
  tAndC = new FormControl(true); */

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    /*this.loginForm = new FormGroup({
      username : this.username,
      useremail : this.useremail,
      password : this.password,
      tAndC : this.tAndC
    }); */

    // Alternate build 1. 
    /*this.loginForm = this.formBuilder.group({
      username : '',
      useremail : '',
      password : '',
      tAndC : true
    });*/

    /* this.loginForm = this.formBuilder.group({
       username : '',
       useremail : { value : 'NA', disabled : true } ,
       password : '',
       tAndC : true
     }); */

    // 3. 
    this.loginForm = this.formBuilder.group({
      username: '',
      useremail: ['', [Validators.required, Validators.minLength(5), Validators.email]],
      password: '',
      tAndC: true,
      notification: 'email',
      phone: ''
    })



  }

  save(): void {

  }

  populateTestData(): void {
    /*this.loginForm.setValue({
      username : "Pankaj Bhatt",
      useremail : "panbhatt@gmail.com",
      password : "password",
      tAndC : true
    });  */

    this.loginForm.patchValue({
      username: "Pankaj Bhatt",
      useremail: "panbhatt@gmail.com",
      password: "password"
    })
  }

  changeValidators(): void {

  }

  get f() {
    return this.loginForm.controls;
  }

  setNotification(opt: string): void {
    // Howe we can get or hold over a control. 
    let notControl = this.f.notification;
    console.log(notControl);
    let phone = this.loginForm.get('phone');
    console.log(phone);

    // Applyign validation over the control. 
    if (opt == 'phone') {
      phone.setValidators([Validators.required, Validators.minLength(12), Validators.maxLength(12), checkMobileNoFormat]);
    } else {
      phone.clearValidators();
    }
    phone.updateValueAndValidity();
  }




}


  // Custom validator for phone format checking. 
  function checkMobileNoFormat(ctrl: AbstractControl): { [key: string]: boolean } | null {
    let phoneRe = /^((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/g;
    let phoneValue = ctrl.value;
    if (phoneValue == null) {
      return { 'empty': true }
    } else if (phoneValue != null) {
      let tst = phoneRe.test(phoneValue);
      if(!tst) {
        return { 'formatError': true } ;
      }
    }
    return null;
  }
