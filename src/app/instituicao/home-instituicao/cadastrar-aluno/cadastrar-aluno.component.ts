import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AlunoService} from '../../../aluno/aluno.service';
import {Aluno} from '../../../aluno/aluno.model';

@Component({
  selector: 'usam-cadastrar-aluno',
  templateUrl: './cadastrar-aluno.component.html',
  styleUrls: ['./cadastrar-aluno.component.css']
})
export class CadastrarAlunoComponent implements OnInit {

  CadastroAlunoaForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private serviceAluno:AlunoService) {
    this.CadastroAlunoaForm = this.formBuilder.group({
      ra_aluno: ['', [Validators.required]],
      nome_aluno: ['', Validators.required],
      email_aluno: ['', Validators.required],
      telefonel_aluno: ['', Validators.required],
      telefone2_aluno: ['', Validators.required],
      usuario_aluno: ['', Validators.required], 
      senha_aluno: ['', Validators.required], 
    });

    
  }

  ngOnInit() {
  }
  salvarAluno(){
    let aluno: Aluno = {
      "id": null,
      "ra_aluno": this.CadastroAlunoaForm.controls.ra_aluno.value,
      "nome_aluno": this.CadastroAlunoaForm.controls.nome_aluno.value,
      "email_aluno": this.CadastroAlunoaForm.controls.email_aluno.value,
      "telefone1_aluno": this.CadastroAlunoaForm.controls.telefonel_aluno.value,
      "telefone2_aluno": this.CadastroAlunoaForm.controls.telefone2_aluno.value,
      "usuario_aluno": this.CadastroAlunoaForm.controls.usuario_aluno.value,
      "senha_aluno": this.CadastroAlunoaForm.controls.senha_aluno.value,
    }
    console.log(aluno); 
    
    this.serviceAluno.registraAluno(aluno).subscribe(
      data =>{
        console.log(data);
        alert("Professor Salvo Com Sucesso !");
      },
      err =>{
        alert("Erro Ao Salvar ,  Veja o Console para detalhes !");
        console.log('Erro Gerado: '+JSON.stringify(err));
      }
    ); 
  }

}
