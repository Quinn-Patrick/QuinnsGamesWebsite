import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VespadianComponent } from './vespadian.component';

describe('VespadianComponent', () => {
  let component: VespadianComponent;
  let fixture: ComponentFixture<VespadianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VespadianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VespadianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
