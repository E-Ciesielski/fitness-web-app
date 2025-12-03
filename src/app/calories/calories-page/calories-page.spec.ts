import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesPage } from './calories-page';

describe('CaloriesPage', () => {
  let component: CaloriesPage;
  let fixture: ComponentFixture<CaloriesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaloriesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaloriesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
