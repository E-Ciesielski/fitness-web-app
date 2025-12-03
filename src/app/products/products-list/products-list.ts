import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-list',
  imports: [RouterLink],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  readonly products = signal([
    { id: 0, name: 'test 1' },
    { id: 1, name: 'test 2' },
  ]);
}
