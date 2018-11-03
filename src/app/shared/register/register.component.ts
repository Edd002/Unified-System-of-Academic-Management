import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Usuario } from '../usuario/usuario.model';
import { Professor } from '../../professor/professor.model';
import { Aluno } from '../../aluno/aluno.model';
import { UsuarioService } from '../usuario/usuario.service';
import { AuthenticatorService } from '../usuario/authenticator.service';
import { ProfessorService } from '../../professor/professor.service';
import { AlunoService } from '../../aluno/aluno.service';


@Component({
  selector: 'usam-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formGroupRegister: FormGroup;
  formGroupRegisterReadOnly: boolean;
  raRegistred: boolean;

  constructor(private formBuilderRegister: FormBuilder, private professorService: ProfessorService, private alunoService: AlunoService, private usuarioService: UsuarioService, private authenticatorService: AuthenticatorService) {
    this.formGroupRegister = this.formBuilderRegister.group({
      registroAcademico: [{ value: null, disabled: false }, [Validators.required]],
      nome: [{ value: null, disabled: false }, [Validators.required]],
      email: [{ value: null, disabled: false }, [Validators.required, Validators.email]],
      usuario: [{ value: null, disabled: false }, [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      senha: [{ value: null, disabled: false }, [Validators.required, Validators.minLength(7), Validators.maxLength(21)]],
      confirmarSenha: [{ value: null, disabled: false }, [Validators.required, Validators.minLength(7), Validators.maxLength(21)]]
    });
  }

  ngOnInit() {
    this.raRegistred = false;
    this.formGroupRegisterReadOnly = true;
  }

  private get ra(): string { return this.formGroupRegister.controls.registroAcademico.value; }
  private set ra(ra: string) { this.formGroupRegister.controls.ra.setValue(ra); }
  private get nome(): string { return this.formGroupRegister.controls.nome.value; }
  private set nome(nome: string) { this.formGroupRegister.controls.nome.setValue(nome); }
  private get email(): string { return this.formGroupRegister.controls.email.value; }
  private set email(email: string) { this.formGroupRegister.controls.email.setValue(email); }
  private get usuario(): string { return this.formGroupRegister.controls.usuario.value; }
  private set usuario(usuario: string) { this.formGroupRegister.controls.usuario.setValue(usuario); }
  private get senha(): string { return this.formGroupRegister.controls.senha.value; }
  private set senha(senha: string) { this.formGroupRegister.controls.senha.setValue(senha); }
  private get confirmarSenha(): string { return this.formGroupRegister.controls.confirmarSenha.value; }
  private set confirmarSenha(confirmarSenha: string) { this.formGroupRegister.controls.confirmarSenha.setValue(confirmarSenha); }

  searchUserByRa() {
    let professor: Professor;
    let aluno: Aluno;
    let usuarioRegistred: Usuario;

    this.usuarioService.getUsuarioByRA(this.ra).subscribe(
      data => usuarioRegistred = data,
      err => { },
      () => {
        if (usuarioRegistred == undefined || Object.keys(usuarioRegistred).length == 0) {
          this.raRegistred = false;

          this.professorService.getProfessorByRA(this.ra).subscribe(
            data => professor = data,
            err => { },
            () => {
              if (professor == undefined || Object.keys(professor).length == 0) {
                this.alunoService.getAlunoByRA(this.ra).subscribe(
                  data => aluno = data,
                  err => { },
                  () => {
                    if (aluno == undefined || Object.keys(aluno).length == 0) {
                      console.log("Não existe o aluno e não existe o professor.");
                      this.formGroupRegister.controls.usuario.markAsUntouched();
                      this.formGroupRegister.controls.senha.markAsUntouched();
                      this.formGroupRegister.controls.confirmarSenha.markAsUntouched();

                      this.nome = null;
                      this.email = null;
                      this.formGroupRegisterReadOnly = true;
                    } else {
                      console.log("Existe o aluno.");
                      this.formGroupRegister.controls.usuario.markAsTouched();
                      this.formGroupRegister.controls.senha.markAsTouched();
                      this.formGroupRegister.controls.confirmarSenha.markAsTouched();

                      this.nome = aluno[0].nome;
                      this.email = aluno[0].email;
                      this.formGroupRegisterReadOnly = false;
                    }
                  }
                );
              } else {
                console.log("Existe o professor.");
                this.formGroupRegister.controls.usuario.markAsTouched();
                this.formGroupRegister.controls.senha.markAsTouched();
                this.formGroupRegister.controls.confirmarSenha.markAsTouched();

                this.nome = professor[0].nome;
                this.email = professor[0].email;
                this.formGroupRegisterReadOnly = false;
              }
            }
          );
        } else {
          this.raRegistred = true;
          console.log('Usuário já registrado.');
        }
      }
    )
  }

  submit() {
    if (this.senha !== this.confirmarSenha) {
      alert('Senha e confirmar senha diferentes.');
    } else {
      let usuarioRegister: Usuario = {
        "id": null,
        "ra": this.ra,
        "nome": this.nome,
        "email": this.email,
        "usuario": this.usuario,
        "senha": this.senha
      }
      //this.authenticatorService.register(usuarioRegister);
    }
  }
}
