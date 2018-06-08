import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPrincipalComponent } from './email-principal.component';

describe('EmailPrincipalComponent', () => {
  let component: EmailPrincipalComponent;
  let fixture: ComponentFixture<EmailPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
