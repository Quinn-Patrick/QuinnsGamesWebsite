import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeflightComponent } from './timeflight.component';

describe('TimeflightComponent', () => {
  let component: TimeflightComponent;
  let fixture: ComponentFixture<TimeflightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeflightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
