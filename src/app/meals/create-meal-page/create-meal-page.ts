import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ProductService } from '../../products/product-service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CreateMealProducts } from '../create-meal-products/create-meal-products';

@Component({
  selector: 'app-create-meal-page',
  imports: [],
  templateUrl: './create-meal-page.html',
  styleUrl: './create-meal-page.css',
  host: {
    class: 'flex-grow-1',
  },
})
export class CreateMealPage {
  productService = inject(ProductService);
  products$ = this.productService.getAll();
  page: WritableSignal<number> = signal(1);
}
