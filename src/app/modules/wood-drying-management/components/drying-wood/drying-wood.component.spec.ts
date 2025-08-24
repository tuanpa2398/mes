import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DryingWoodComponent } from './drying-wood.component';

describe('DryingWoodComponent', () => {
  let component: DryingWoodComponent;
  let fixture: ComponentFixture<DryingWoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DryingWoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DryingWoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
