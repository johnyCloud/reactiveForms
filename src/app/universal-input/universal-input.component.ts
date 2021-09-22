import { Component,  Input, Output, EventEmitter,forwardRef } from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';;

@Component({
  selector: 'universal-input',
  templateUrl: './universal-input.component.html',
  styleUrls: ['./universal-input.component.css'],

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UniversalInputComponent),
      multi: true
    }
  ]
})
export class UniversalInputComponent implements ControlValueAccessor {

  // @Input() type: 'text'
  // | 'number'
  // | 'textarea'
  // | 'email'
  // | 'password'
  // | 'tel' = 'text';

  // @Input() name: string = "";
  // @Input() placeholder: string = "";
  // // @Input() autocomplete: string = "off";
  // // @Input() pattern?: string;
  // @Input() value?: any;

  // @Input() class?: string;
  // @Input() label?: string;

  // @Input() min?: number;
  // @Input() max?: number;
  // @Input() minLength?: number;
  // @Input() maxLength?: number;
  // @Input() step?: number;
 
  
  onChange: any = () => {}
  onTouch: any = () => {}
  registerOnChange(fn: any): void {
    this.onChange = fn;
    console.log(this.onChange);
    
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  
  input!: string;
  writeValue(input: string) {
    this.input = input;
  }


  // input?: FormControl;
  // constructor() { }

   

  // writeValue(value: any) {
  //   this.value = value;
  // }
  
  // propagateChange = (_: any) => {};

  // registerOnChange(fn) {
  //   this.propagateChange = fn;
  // }

  // registerOnTouched() {}
  // // ngOnInit(): void {
  // //  this.input = new FormControl(null);
  // // }

  // // change(value: any){
  // //   this.inputValue.emit(value);
  // //   console.log(value);
    
  // // }
}
