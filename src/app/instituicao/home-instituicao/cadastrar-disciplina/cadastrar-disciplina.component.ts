import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Disciplina} from './disciplina.model'

@Component({
  selector: 'usam-cadastrar-disciplina',
  templateUrl: './cadastrar-disciplina.component.html',
  styleUrls: ['./cadastrar-disciplina.component.css']
})
export class CadastrarDisciplinaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {

    this.CadastroDisiciplinaForm = this.formBuilder.group({
      nome_disciplina: ['', Validators.required],
      turno_disciplina: ['', Validators.required],
      cursos_disciplina: ['', Validators.required]
    });

   }

  ngOnInit() {
  }

  CadastroDisiciplinaForm = this.formBuilder.group({
    usuario: [''],
    senha: ['']
  });

  salvarDisciplina(){
    let disciplina: Disciplina = {
      "codigo": null,
      "nome": this.CadastroDisiciplinaForm.controls.name.value,
      "turno_disciplina": this.CadastroDisiciplinaForm.controls.email.value,
      "cursos_disciplina": this.CadastroDisiciplinaForm.controls.email.value,
    }

  }

  

}
