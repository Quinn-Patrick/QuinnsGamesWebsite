import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChryseComponent } from './chryse.component';

describe('ChryseComponent', () => {
  let component: ChryseComponent;
  let fixture: ComponentFixture<ChryseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChryseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChryseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
