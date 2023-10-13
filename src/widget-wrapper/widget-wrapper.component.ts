import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-widget-wrapper',
  standalone: true,
  template: `
    <div class="grid">
      <h1>Widget</h1>
      <button>Refresh</button>
    </div>
    <hr>
  `,
  styles: [
    `
    `
  ],
})
export class WidgetWrapperComponent implements OnInit {
  ngOnInit(): void {
  }

}
