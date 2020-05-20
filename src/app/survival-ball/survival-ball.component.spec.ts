import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivalBallComponent } from './survival-ball.component';

describe('SurvivalBallComponent', () => {
  let component: SurvivalBallComponent;
  let fixture: ComponentFixture<SurvivalBallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurvivalBallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvivalBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
