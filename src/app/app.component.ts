import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from "@angular/common";
import {LockInputComponent} from "../complex-form-control/lock-input/lock-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="container">
      <div class="grid">
        <h5>{{title}}</h5>
        <div><a [href]="url" target="_blank"><img src="assets/svg/MdiYoutube.svg"></a></div>
      </div>
      <hr>

      <form [formGroup]="formGroup">
        <label for="itemName">
          Item Name
          <input id="itemName" formControlName="itemName" placeholder="Add Item">
        </label>
        <app-lock-input formControlName="isLocked"></app-lock-input>
        <button type="submit" (click)="onSubmit()">Add Item</button>
      </form>

      <article class="black-background">{{formGroup.value | json}}</article>
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
    ReactiveFormsModule,
    JsonPipe,
    LockInputComponent
  ]
})
export class AppComponent implements OnInit {
  title = 'Control Value Accessor in Angular [Advanced, 2020]';
  url = 'https://www.youtube.com/watch?v=OrmIfW8Ak3w';
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      itemName: new FormControl(),
      isLocked: new FormControl(),
    });
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }

}
