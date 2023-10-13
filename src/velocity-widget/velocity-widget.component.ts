import {Component} from "@angular/core";
import {NgIf} from "@angular/common";
import {Widget} from "../widget-wrapper/widget.interface";
import {WIDGET} from "../widget-wrapper/widget.token";

@Component({
  selector: 'app-velocity-widget',
  standalone: true,
  template: `
      <progress *ngIf="isRefreshing"></progress>
      <h5>Last Sprint</h5>
      <section>
          <img src="assets/svg/MaterialSymbolsSprint.svg">
          <div>Planned: <strong>25</strong></div>
          <div>Achieved: <strong>20</strong></div>
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
    useExisting: VelocityWidgetComponent,
  }]
})
export class VelocityWidgetComponent implements Widget {
  isRefreshing = false;

  load() {
    console.log('loading data from JIRA API...');
  }

  refresh() {
    this.isRefreshing = true;
    setTimeout(() => {
      this.isRefreshing = false;
    }, 2500)
  }
}
