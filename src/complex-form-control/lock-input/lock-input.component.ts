import { Component } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-lock-input',
  standalone: true,
  template: `
      <small>Should be locked:</small>
      <!-- See https://icones.js.org/collection/all -->
      <img
        src="{{isLocked ? 'assets/svg/MaterialSymbolsLock.svg' : 'assets/svg/MaterialSymbolsLockOpenOutline.svg'}}"
        (click)="isLocked = !isLocked" alt="">
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
  isLocked = false;

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }
}
