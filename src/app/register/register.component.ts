import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  subscription = ['Basic', 'Advanced',
  'Pro'];
  selectedsubscription = 'Basic';
  //@ViewChild('uform') sgnForm:NgForm
 

  constructor() { }

  ngOnInit() {
  }
  onSubmit(uForm){
    console.log(uForm.value);
  }
}
