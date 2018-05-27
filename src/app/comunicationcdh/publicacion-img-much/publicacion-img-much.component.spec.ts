import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionImgMuchComponent } from './publicacion-img-much.component';

describe('PublicacionImgMuchComponent', () => {
  let component: PublicacionImgMuchComponent;
  let fixture: ComponentFixture<PublicacionImgMuchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionImgMuchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionImgMuchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
