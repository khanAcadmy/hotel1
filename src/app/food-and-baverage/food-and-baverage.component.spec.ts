import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAndBaverageComponent } from './food-and-baverage.component';

describe('FoodAndBaverageComponent', () => {
  let component: FoodAndBaverageComponent;
  let fixture: ComponentFixture<FoodAndBaverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAndBaverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAndBaverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
