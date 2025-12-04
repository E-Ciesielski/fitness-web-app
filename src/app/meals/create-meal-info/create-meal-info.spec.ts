import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMealInfo } from './create-meal-info';

describe('CreateMealInfo', () => {
  let component: CreateMealInfo;
  let fixture: ComponentFixture<CreateMealInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMealInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMealInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
