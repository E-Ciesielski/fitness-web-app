import { Routes } from '@angular/router';
import { CaloriesPage } from './calories/calories-page/calories-page';
import { ProductsPage } from './products/products-page/products-page';
import { CreateProductPage } from './products/create-product-page/create-product-page';
import { MealsPage } from './meals/meals-page/meals-page';
import { CreateMealPage } from './meals/create-meal-page/create-meal-page';
import { CreateMealProducts } from './meals/create-meal-products/create-meal-products';
import { CreateMealInfo } from './meals/create-meal-info/create-meal-info';

export const routes: Routes = [
  { path: 'calories', component: CaloriesPage },
  { path: 'products', component: ProductsPage },
  { path: 'products/new', component: CreateProductPage },
  { path: 'meals', component: MealsPage },
  { path: 'meals/new', component: CreateMealPage },
];
