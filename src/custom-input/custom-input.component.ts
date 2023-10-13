import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-custom-input',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ],
  template: `<input [(ngModel)]="value"/>internal value: {{_internalValue}}`,
  styles: [
    `
      .black-background {
        background-color: var(--h1-color);
      }
    `
  ],
  imports: [
    FormsModule
  ]
})
export class CustomInputComponent implements ControlValueAccessor {
  onChange: any = () => {
  }
  onTouch: any = () => {
  }

  _internalValue = ""

  set value(val: string) {  // this value is updated by programmatic changes
    if (val !== undefined && this._internalValue !== val) {
      this._internalValue = val
      this.onChange(val)
      this.onTouch(val)
    }
  }

  get value() {
    return this._internalValue;
  }

  // this method sets the value programmatically
  writeValue(value: any) {
    this.value= value
  }

  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any) {
    this.onChange = fn
  }

  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any) {
    this.onTouch = fn
  }

}

