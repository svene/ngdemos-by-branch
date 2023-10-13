import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="container">
      <h1>{{title}}</h1>

      <label for="reactive">
        Reactive Input
        <input id="reactive" [formControl]="fcFirstName">
      </label>
      <p>Control Value: {{fcFirstName.value}}</p>

      <hr>

      <label for="template">
        Template-Driven Input
        <input id="template" [(ngModel)]="lastName">
      </label>
      <p>Control Value: {{lastName}}</p>

      <hr>

      <label for="checkbox">
        Template-Driven Checkbox
        <input id="checkbox" type="checkbox" [(ngModel)]="active">
      </label>
      <p>Control Value: {{active}}</p>

      <hr>

      <label for="car">
        Template-Driven Select
        <select id="car" [(ngModel)]="car">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>        </select>
      </label>
      <p>Control Value: {{car}}</p>

      <!--
      <article class="black-background">An article</article>
-->
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
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppComponent {
  title = 'ngdemos-by-branch';
  fcFirstName = new FormControl('Sven');
  lastName = 'Ehrke';
  active = true;
  car = '';
}
