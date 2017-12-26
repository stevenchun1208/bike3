import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeofdayComponent } from './bikeofday.component';

describe('BikeofdayComponent', () => {
  let component: BikeofdayComponent;
  let fixture: ComponentFixture<BikeofdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeofdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeofdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
