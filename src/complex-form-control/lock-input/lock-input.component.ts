import { Component } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-lock-input',
  standalone: true,
  template: `
    <small>Should be locked:</small>
    <!-- See https://icones.js.org/collection/all -->
    <img [ngClass]="{'disabled-control': disabled}"
         src="{{value ? 'assets/svg/MaterialSymbolsLock.svg' : 'assets/svg/MaterialSymbolsLockOpenOutline.svg'}}"
         (click)="setValue()" alt="">
  `,
  styles: [
    `
      .disabled-control {
        opacity: 0.5;
        pointer-events: none;
      }
    `
  ],
  imports: [
    NgClass
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
  disabled = false;
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

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setValue() {
    if (!this.disabled) {
      this.value = !this.value;
      this.onChange(this.value);
      this.onTouched();
    }
  }
}
