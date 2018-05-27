import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionImgUnComponent } from './publicacion-img-un.component';

describe('PublicacionImgUnComponent', () => {
  let component: PublicacionImgUnComponent;
  let fixture: ComponentFixture<PublicacionImgUnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionImgUnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionImgUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
