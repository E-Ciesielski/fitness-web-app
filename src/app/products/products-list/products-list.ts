import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-products-list',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList implements OnInit {
  productService = inject(ProductService);
  products$: Observable<Product[]> | undefined = undefined;

  ngOnInit() {
    this.products$ = this.productService.getAll();
  }
}
