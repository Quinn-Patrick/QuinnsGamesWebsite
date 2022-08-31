import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrubnarComponent } from './brubnar.component';

describe('BrubnarComponent', () => {
  let component: BrubnarComponent;
  let fixture: ComponentFixture<BrubnarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrubnarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrubnarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
