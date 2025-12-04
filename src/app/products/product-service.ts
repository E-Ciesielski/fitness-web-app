import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private http = inject(HttpClient);

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('api/products');
  }
}
