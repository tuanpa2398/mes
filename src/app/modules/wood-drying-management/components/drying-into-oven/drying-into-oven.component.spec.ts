import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DryingIntoOvenComponent } from './drying-into-oven.component';

describe('DryingIntoOvenComponent', () => {
  let component: DryingIntoOvenComponent;
  let fixture: ComponentFixture<DryingIntoOvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DryingIntoOvenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DryingIntoOvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
