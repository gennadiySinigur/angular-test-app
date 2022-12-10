import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl<string|null>('', [
        Validators.required,
        Validators.pattern(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/),
      ]),
      password: new FormControl<string|null>(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  submit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authenticationService.login(email, password);
      this.router.navigateByUrl('/admin');
    }
  }

  shouldDisplayValidationError(
    control: AbstractControl<string, string> | null
  ): boolean | undefined {
    return control?.invalid && (control?.dirty || control?.touched);
  }

  isRequiredError(control: AbstractControl<string, string> | null): boolean {
    return control?.errors?.['required'];
  }

  isRegexPatternError(control: AbstractControl<string, string> | null): boolean {
    return control?.errors?.['pattern'];
  }

  isMinLengthError(control: AbstractControl<string, string> | null): boolean {
    return control?.errors?.['minlength'];
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
