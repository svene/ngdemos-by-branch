import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  template: `<input/>`,
  styles: [
    `
      .black-background {
        background-color: var(--h1-color);
      }
    `
  ],
})
export class CustomInputComponent {
  title = 'ngdemos-by-branch';
}
