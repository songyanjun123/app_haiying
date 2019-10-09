import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Invite2Component } from './invite2.component';

describe('Invite2Component', () => {
  let component: Invite2Component;
  let fixture: ComponentFixture<Invite2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Invite2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Invite2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
