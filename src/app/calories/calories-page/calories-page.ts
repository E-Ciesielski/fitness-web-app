import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-calories-page',
  imports: [],
  templateUrl: './calories-page.html',
  styleUrl: './calories-page.css',
})
export class CaloriesPage {
  readonly selectedDate = signal(new Date());
}
