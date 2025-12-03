import { Component } from '@angular/core';
import { ProductsList } from '../products-list/products-list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-page',
  imports: [ProductsList, RouterLink],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage {}
