import { Component } from '@angular/core';
import {WidgetWrapperComponent} from "../widget-wrapper/widget-wrapper.component";
import {VelocityWidgetComponent} from "../velocity-widget/velocity-widget.component";
import {WeatherWidgetComponent} from "../weather-widget/weather-widget.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
      <main class="container">
          <h1>{{title}}</h1>
          <article>
              <app-widget-wrapper>
                <app-weather-widget></app-weather-widget>
              </app-widget-wrapper>
          </article>
          <article>
            <app-widget-wrapper>
              <app-velocity-widget></app-velocity-widget>
            </app-widget-wrapper>
          </article>
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
    WidgetWrapperComponent,
    VelocityWidgetComponent,
    WeatherWidgetComponent
  ]
})
export class AppComponent {
  title = 'ngdemos-by-branch';
}
