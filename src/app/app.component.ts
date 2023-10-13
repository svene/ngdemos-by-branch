import { Component } from '@angular/core';
import {CustomInputComponent} from "../custom-input/custom-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="container">
      <h1>{{title}}</h1>
      <div class="grid">
        <app-custom-input></app-custom-input>
      </div>

      <article class="black-background">An article</article>
    </main>

  `,
  styles: [
    `
      .black-background {
        background-color: var(--h1-color);
      }
    `
  ],
  imports: [
    AppComponent,
    CustomInputComponent
  ]
})
export class AppComponent {
  title = 'ngdemos-by-branch';
}
