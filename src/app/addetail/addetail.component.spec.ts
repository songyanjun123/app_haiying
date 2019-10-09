import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddetailComponent } from './addetail.component';

describe('AddetailComponent', () => {
  let component: AddetailComponent;
  let fixture: ComponentFixture<AddetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
