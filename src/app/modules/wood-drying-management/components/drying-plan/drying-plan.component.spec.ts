import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DryingPlanComponent } from './drying-plan.component';

describe('DryingPlanComponent', () => {
  let component: DryingPlanComponent;
  let fixture: ComponentFixture<DryingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DryingPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DryingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
