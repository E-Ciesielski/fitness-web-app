import { Component, inject, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../product-service';
import { Product } from '../product';

@Component({
  selector: 'app-create-product-page',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './create-product-page.html',
  styleUrl: './create-product-page.css',
})
export class CreateProductPage {
  private productService = inject(ProductService);
  private router = inject(Router);
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    unit: new FormControl('', [Validators.required]),
    unitAmount: new FormControl('', [
      Validators.required,
      Validators.max(100_000),
      Validators.min(0),
    ]),
    caloriesPerUnit: new FormControl('', [
      Validators.required,
      Validators.max(100_000),
      Validators.min(0),
    ]),
    quantity: new FormControl('', [
      Validators.required,
      Validators.max(100_000),
      Validators.min(0),
    ]),
  });

  get name() {
    return this.form.get('name');
  }

  get unit() {
    return this.form.get('unit');
  }

  get unitAmount() {
    return this.form.get('unitAmount');
  }

  get caloriesPerUnit() {
    return this.form.get('caloriesPerUnit');
  }

  get quantity() {
    return this.form.get('quantity');
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const product = <Product>{
      id: 0,
      name: this.name?.value,
      unit: this.unit?.value,
      unitAmount: Number(this.unitAmount?.value),
      caloriesPerUnit: Number(this.caloriesPerUnit?.value),
      quantity: Number(this.quantity?.value),
    };
    this.productService.create(product).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/products');
      },
      error: (e) => console.error(e),
    });
  }
}
