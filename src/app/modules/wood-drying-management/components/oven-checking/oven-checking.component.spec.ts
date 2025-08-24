import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvenCheckingComponent } from './oven-checking.component';

describe('OvenCheckingComponent', () => {
  let component: OvenCheckingComponent;
  let fixture: ComponentFixture<OvenCheckingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OvenCheckingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OvenCheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
