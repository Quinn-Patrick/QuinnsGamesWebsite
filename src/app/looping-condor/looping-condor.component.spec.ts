import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopingCondorComponent } from './looping-condor.component';

describe('LoopingCondorComponent', () => {
  let component: LoopingCondorComponent;
  let fixture: ComponentFixture<LoopingCondorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopingCondorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopingCondorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
