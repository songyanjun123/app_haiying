import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermoneyComponent } from './usermoney.component';

describe('UsermoneyComponent', () => {
  let component: UsermoneyComponent;
  let fixture: ComponentFixture<UsermoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
