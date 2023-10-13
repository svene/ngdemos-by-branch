import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
      <h1>{{title}}</h1>
  `,
  styles: [
    `
    `
  ],
})
export class AppComponent {
  title = 'ngdemos-by-branch';
}
