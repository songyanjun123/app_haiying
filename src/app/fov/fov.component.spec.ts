import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FovComponent } from './fov.component';

describe('FovComponent', () => {
  let component: FovComponent;
  let fixture: ComponentFixture<FovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
