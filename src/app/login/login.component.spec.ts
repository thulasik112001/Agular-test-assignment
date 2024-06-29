import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize form group', () => {
    expect(component.loginform).toBeDefined();
    expect(component.loginform.controls['email']).toBeDefined();
    expect(component.loginform.controls['password']).toBeDefined();
  });

  it('should validate email field as required', () => {
    let email = component.loginform.controls['email'];
    email.setValue('');
    expect(email.valid).toBeFalsy();
    expect(email.errors?.['required']).toBeTruthy();
  });

  it('should validate password field as required', () => {
    let password = component.loginform.controls['password'];
    password.setValue('');
    expect(password.valid).toBeFalsy();
    expect(password.errors?.['required']).toBeTruthy();
  });

  it('should validate email field minimum length', () => {
    let email = component.loginform.controls['email'];
    email.setValue('abc');
    expect(email.valid).toBeFalsy();
    expect(email.errors?.['minlength']).toBeTruthy();
  });

  it('should validate password field minimum length', () => {
    let password = component.loginform.controls['password'];
    password.setValue('abc');
    expect(password.valid).toBeFalsy();
    expect(password.errors?.['minlength']).toBeTruthy();
  });

});
