import { Component, OnInit, Input ,forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements  ControlValueAccessor {
  @Input() type?:
    | 'text'
    | 'textarea'
    | 'email'
    | 'password'
    | 'tel'
    | 'address' = 'text';
  @Input() disabled?: boolean;
  @Input() label?: string;
  @Input() placeholder?: string = '';
  

  @Input() autocomplete = 'off';
  @Input() class = '';
  @Input() step?: number;

  @Input() title = '';
  @Input() maxLength?: number;
  @Input() minLength?: number;
  @Input() max?: number;
  @Input() min?: number;
  value: any = '';

  constructor() {}

  // ngOnInit() {}

  
  writeValue(value: any): void {
    this.value = value;
  }

  
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

 
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChange: any = () => { };
  onTouched: any = () => { };
}