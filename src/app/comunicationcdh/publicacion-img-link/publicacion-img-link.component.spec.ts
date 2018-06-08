import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionImgLinkComponent } from './publicacion-img-link.component';

describe('PublicacionImgLinkComponent', () => {
  let component: PublicacionImgLinkComponent;
  let fixture: ComponentFixture<PublicacionImgLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionImgLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionImgLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
