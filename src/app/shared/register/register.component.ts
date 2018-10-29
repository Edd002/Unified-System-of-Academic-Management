import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../authenticator-service/user.model';
import { Professor } from '../../professor/professor.model';
import { Aluno } from '../../aluno/aluno.model';
import { AuthenticatorService } from '../authenticator-service/authenticator.service';
import { ProfessorService } from '../../professor/professor.service';
import { AlunoService } from '../../aluno/aluno.service';

@Component({
  selector: 'usam-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
  formRegisterValidator: boolean;
  user: User;

  constructor(private formBuilder: FormBuilder, private authenticatorService: AuthenticatorService, private alunoService: AlunoService, private professorService: ProfessorService) {
    this.formRegister = this.formBuilder.group({
      registroAcademico: [{ value: null, disabled: false }, [Validators.required]],
      nome: [{ value: null, disabled: true }, [Validators.required]],
      email: [{ value: null, disabled: true }, [Validators.required, Validators.email]],
      usuario: [{ value: null, disabled: true }, Validators.required, Validators.minLength(6)],
      senha: [{ value: null, disabled: true }, [Validators.required, Validators.minLength(7)]],
      confirmarSenha: [{ value: null, disabled: true }, [Validators.required, Validators.minLength(7)]]
    });
  }

  ngOnInit() {
  }

  enableFormRegisterFields() {
    this.formRegister.controls.nome.disable();
    this.formRegister.controls.email.disable();
    this.formRegister.controls.usuario.disable();
    this.formRegister.controls.senha.disable();
    this.formRegister.controls.confirmarSenha.disable();
  }

  searchUserByRa() {
    let ra: string = this.formRegister.get('registroAcademico').value;

    let professor: Professor;
    this.professorService.getProfessorByRA(ra).subscribe(
      data => professor = data
    );

    let aluno: Aluno;
    this.alunoService.getAlunoByRA(ra).subscribe(
      data => aluno = data
    );

    if (professor == null) {
      alert('Continuar com o formulário e os campos finais desativados');
    } else {
      alert('Ativar os campos finais e verificá-los a fim de ativar o formulário');
    }
  }

  submit() {
    let user: User = {
      "codigo": null,
      "ra": null,
      "nome": this.formRegister.controls.name.value,
      "email": this.formRegister.controls.email.value,
      "usuario": this.formRegister.controls.usuario.value,
      "senha": this.formRegister.controls.senha.value
    }

    //this.authenticatorService.register(user);
  }
}
