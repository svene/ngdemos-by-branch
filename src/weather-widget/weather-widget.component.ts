import {Component} from "@angular/core";
import {NgIf} from "@angular/common";
import {Widget} from "../widget-wrapper/widget.interface";
import {WIDGET} from "../widget-wrapper/widget.token";

@Component({
  selector: 'app-weather-widget',
  standalone: true,
  template: `
      <progress *ngIf="isLoading"></progress>
      <h5>Current Weather</h5>
      <section>
          <img src="assets/svg/MaterialSymbolsSunnyOutline.svg"><!-- See https://icones.js.org/collection/all -->
          <div>+25</div>
      </section>
  `,
  styles: [
    `
    `
  ],
  imports: [
    NgIf
  ],
  providers: [{
    provide: WIDGET,
    useExisting: WeatherWidgetComponent,
  }]
})
export class WeatherWidgetComponent implements Widget {
  isLoading = false;

  load() {
    console.log('loading data from WEATHER API...');
  }

  refresh() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000)
  }

}
