import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionSliderComponent } from './publicacion-slider.component';

describe('PublicacionSliderComponent', () => {
  let component: PublicacionSliderComponent;
  let fixture: ComponentFixture<PublicacionSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
