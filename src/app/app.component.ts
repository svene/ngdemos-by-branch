import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="container">
      <h1>{{title}}</h1>
      <div class="grid">
        <div><button class="app-button" type="button">A Button</button></div>
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
})
export class AppComponent {
  title = 'ngdemos-by-branch';
}
