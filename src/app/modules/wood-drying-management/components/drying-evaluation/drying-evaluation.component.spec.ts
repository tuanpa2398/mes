import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DryingEvaluationComponent } from './drying-evaluation.component';

describe('DryingEvaluationComponent', () => {
  let component: DryingEvaluationComponent;
  let fixture: ComponentFixture<DryingEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DryingEvaluationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DryingEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
