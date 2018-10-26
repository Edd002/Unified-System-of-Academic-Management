import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'usam-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup

  constructor(private formBuilder: FormBuilder) {

    this.formRegister = this.formBuilder.group({
      registroAcademico: ['', [Validators.required]],
      usuario: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  ngOnInit() {
  }

  /*
  submit() {
    let user: User = {
      "id": null,
      "name": this.registerForm.controls.name.value,
      "email": this.registerForm.controls.email.value,
      "password": this.registerForm.controls.password.value
    }

    this.authService.registrar(user);
  }
  */
}
