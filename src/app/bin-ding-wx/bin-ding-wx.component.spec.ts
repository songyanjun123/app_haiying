import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinDingWxComponent } from './bin-ding-wx.component';

describe('BinDingWxComponent', () => {
  let component: BinDingWxComponent;
  let fixture: ComponentFixture<BinDingWxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinDingWxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinDingWxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
