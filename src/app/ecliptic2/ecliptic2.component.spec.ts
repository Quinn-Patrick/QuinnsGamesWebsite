import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecliptic2Component } from './ecliptic2.component';

describe('Ecliptic2Component', () => {
  let component: Ecliptic2Component;
  let fixture: ComponentFixture<Ecliptic2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ecliptic2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ecliptic2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
