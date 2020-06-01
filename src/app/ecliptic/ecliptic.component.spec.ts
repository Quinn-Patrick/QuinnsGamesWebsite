import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EclipticComponent } from './ecliptic.component';

describe('EclipticComponent', () => {
  let component: EclipticComponent;
  let fixture: ComponentFixture<EclipticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EclipticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EclipticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
