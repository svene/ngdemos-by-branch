import { Component } from '@angular/core';

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
})
export class LockInputComponent {
  isLocked = false;
}
