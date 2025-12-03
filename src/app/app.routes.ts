import { Routes } from '@angular/router';
import { CaloriesPage } from './calories/calories-page/calories-page';
import { ProductsPage } from './products/products-page/products-page';
import { CreateProductPage } from './products/create-product-page/create-product-page';

export const routes: Routes = [
  { path: 'calories', component: CaloriesPage },
  { path: 'products', component: ProductsPage },
  { path: 'products/new', component: CreateProductPage },
];
