import { Component, OnInit, Input, Self, Optional ,forwardRef} from '@angular/core';
import { ControlValueAccessor, NgControl,NG_VALUE_ACCESSOR } from '@angular/forms';

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
  @Input() disabled?: boolean;
  @Input() label?: string;
  @Input() placeholder?: string = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';

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