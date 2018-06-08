import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionImgTresComponent } from './publicacion-img-tres.component';

describe('PublicacionImgTresComponent', () => {
  let component: PublicacionImgTresComponent;
  let fixture: ComponentFixture<PublicacionImgTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionImgTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionImgTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
