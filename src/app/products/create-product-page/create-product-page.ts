import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product-page',
  imports: [ReactiveFormsModule],
  templateUrl: './create-product-page.html',
  styleUrl: './create-product-page.css',
})
export class CreateProductPage {
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
    console.log(this.form.value);
  }
}
