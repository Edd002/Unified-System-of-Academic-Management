import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../authenticator-service/user.model';
import { Professor } from '../../professor/professor.model';
import { Aluno } from '../../aluno/aluno.model';
import { AuthenticatorService } from '../authenticator-service/authenticator.service';
import { ProfessorService } from '../../professor/professor.service';
import { AlunoService } from '../../aluno/aluno.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'usam-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
  formRegisterReadOnly: boolean;
  user: User;
  professor: Professor;
  aluno: Aluno;

  constructor(private formBuilder: FormBuilder, private authenticatorService: AuthenticatorService, private alunoService: AlunoService, private professorService: ProfessorService) {
    this.formRegister = this.formBuilder.group({
      registroAcademico: [{ value: null, disabled: false }, [Validators.required]],
      nome: [{ value: null, disabled: false }, [Validators.required]],
      email: [{ value: null, disabled: false }, [Validators.required, Validators.email]],
      usuario: [{ value: null, disabled: false }, [Validators.required, Validators.minLength(6)]],
      senha: [{ value: null, disabled: false }, [Validators.required, Validators.minLength(7)]],
      confirmarSenha: [{ value: null, disabled: false }, [Validators.required, Validators.minLength(7)]]
    });
  }

  ngOnInit() {
    this.formRegisterReadOnly = true;
  }

  searchUserByRa() {
    let ra: string = this.formRegister.controls.registroAcademico.value;
    
    this.professorService.getProfessorByRA(ra).subscribe(
      data => this.professor = data
    );
    
    this.alunoService.getAlunoByRA(ra).subscribe(
      data => this.aluno = data
    );

    if ( true /*Object.keys(this.professor).length != 0*/ ) {
      this.formRegisterReadOnly = true;
      //console.log('Continuar com o formulário e os campos desativados');
    } else {
      //this.formRegisterReadOnly = false;
      //console.log('Ativar os campos e validá-los');
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
