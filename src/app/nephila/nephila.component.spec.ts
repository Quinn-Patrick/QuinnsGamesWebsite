import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NephilaComponent } from './nephila.component';

describe('NephilaComponent', () => {
  let component: NephilaComponent;
  let fixture: ComponentFixture<NephilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NephilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NephilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
