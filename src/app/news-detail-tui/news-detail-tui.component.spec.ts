import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailTuiComponent } from './news-detail-tui.component';

describe('NewsDetailTuiComponent', () => {
  let component: NewsDetailTuiComponent;
  let fixture: ComponentFixture<NewsDetailTuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDetailTuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailTuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
