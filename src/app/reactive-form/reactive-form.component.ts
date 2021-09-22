import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit  {

  customInputForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.customInputForm = this.formBuilder.group(
      {
        email: [''],
        fullname: [''],
        phone: [{
          value: '1234567890',
          disabled: true
        }]
      },
    );
  }
  
  
  
}
