import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormArray} from '@angular/forms' ; 
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-reac-address-form',
  templateUrl: './reac-address-form.component.html',
  styleUrls: ['./reac-address-form.component.css']
})
export class ReacAddressFormComponent implements OnInit {

  contactForm : FormGroup ;  

  constructor(private fb : FormBuilder ) { }

  get emails() : FormArray {
    return <FormArray>this.contactForm.get('emails') ;
  }

  ngOnInit() {

    this.contactForm = this.fb.group({
      pname : [''],
      pemail : ['', [ Validators.required, Validators.email]],
      emails : this.fb.array([this.buildContactForm()])

    })
  }


  buildContactForm() : FormGroup {
    return this.fb.group({
      pname : ['', [Validators.required]],
      pemail : ['', [Validators.required, Validators.email]]
    }) ;
  }

  addContact() : void  {
    this.emails.push(this.buildContactForm()) ;
  }

}
