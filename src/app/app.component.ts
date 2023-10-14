import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="container">
      <div class="grid">
        <h5>{{title}}</h5>
        <div><a [href]="url" target="_blank"><img src="assets/svg/LogosYoutubeIcon.svg"></a></div>
      </div>
      <hr>
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
  title = 'Title of Demo';
  url = 'https://angular.io/';
}
