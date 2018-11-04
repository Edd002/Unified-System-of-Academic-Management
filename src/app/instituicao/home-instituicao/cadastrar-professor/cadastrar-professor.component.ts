import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Professor} from '../../../professor/professor.model';
import {ProfessorService} from '../../../professor/professor.service';

@Component({
  selector: 'usam-cadastrar-professor',
  templateUrl: './cadastrar-professor.component.html',
  styleUrls: ['./cadastrar-professor.component.css']
})
export class CadastrarProfessorComponent implements OnInit {

  CadastroProfessorForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private serviceProfessor:ProfessorService) {
    this.CadastroProfessorForm = this.formBuilder.group({
      ra_professor: ['', [Validators.required]],
      nome_professor: ['', Validators.required],
      email_professor: ['', Validators.required],
      telefonel_professor: ['', Validators.required],
      telefone2_professor: ['', Validators.required],
      usuario_professor: ['', Validators.required], 
      senha_professor: ['', Validators.required], 
    });
   }

  ngOnInit() {
  }

  salvarProfessor(){
    let professor: Professor = {
      "id": null,
      "ra_professor": this.CadastroProfessorForm.controls.ra_professor.value,
      "nome_professor": this.CadastroProfessorForm.controls.nome_professor.value,
      "email_professor": this.CadastroProfessorForm.controls.email_professor.value,
      "telefone1_professor": this.CadastroProfessorForm.controls.telefonel_professor.value,
      "telefone2_professor": this.CadastroProfessorForm.controls.telefone2_professor.value,
      "usuario_professor": this.CadastroProfessorForm.controls.usuario_professor.value,
      "senha_professor": this.CadastroProfessorForm.controls.senha_professor.value,
    }
    console.log(professor); 
    
    this.serviceProfessor.registraProfessor(professor).subscribe(
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
