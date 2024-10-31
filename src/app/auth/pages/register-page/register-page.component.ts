import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidator from '../../../shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(customValidator.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, customValidator.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) {  }

  isValidField(field: string) {
    //TODO obtener validacion desde un servicio

  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
