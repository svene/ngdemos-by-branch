import {Component, OnInit, ContentChild } from "@angular/core";
import {VelocityWidgetComponent} from "../velocity-widget/velocity-widget.component";

@Component({
  selector: 'app-widget-wrapper',
  standalone: true,
  template: `
    <div class="grid">
      <h1>Widget</h1>
      <button (click)="onRefresh()">Refresh</button>
    </div>
    <hr>
    <section>
      <ng-content></ng-content>
    </section>
  `,
  styles: [
    `
    `
  ],
})
export class WidgetWrapperComponent implements OnInit {

  @ContentChild(VelocityWidgetComponent)
  widget!: VelocityWidgetComponent;

  ngOnInit(): void {
  }

  onRefresh() {
    this.widget.refresh();
  }
}
