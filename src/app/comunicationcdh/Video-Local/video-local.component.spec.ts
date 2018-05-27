import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLocalComponent } from './video-local.component';

describe(' VideoLocalComponent', () => {
  let component:  VideoLocalComponent;
  let fixture: ComponentFixture< VideoLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  VideoLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( VideoLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
