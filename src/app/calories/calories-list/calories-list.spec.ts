import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesList } from './calories-list';

describe('CaloriesList', () => {
  let component: CaloriesList;
  let fixture: ComponentFixture<CaloriesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaloriesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaloriesList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
