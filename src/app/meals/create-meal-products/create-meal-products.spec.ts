import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMealProducts } from './create-meal-products';

describe('CreateMealProducts', () => {
  let component: CreateMealProducts;
  let fixture: ComponentFixture<CreateMealProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMealProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMealProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
