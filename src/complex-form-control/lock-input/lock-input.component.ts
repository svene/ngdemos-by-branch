import { Component } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-lock-input',
  standalone: true,
  template: `
    <small>Should be locked:</small>
    <!-- See https://icones.js.org/collection/all -->
    <img
      src="{{value ? 'assets/svg/MaterialSymbolsLock.svg' : 'assets/svg/MaterialSymbolsLockOpenOutline.svg'}}"
      (click)="setValue()" alt="">
  `,
  styles: [
    `
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: LockInputComponent,
      multi: true,
    }
  ]
})
export class LockInputComponent implements ControlValueAccessor{
  value = false;
  onChange!: (value: boolean) => void;
  onTouched!: () => void;

  writeValue(obj: boolean): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setValue() {
    this.value = !this.value;
    this.onChange(this.value);
    this.onTouched();
  }
}
