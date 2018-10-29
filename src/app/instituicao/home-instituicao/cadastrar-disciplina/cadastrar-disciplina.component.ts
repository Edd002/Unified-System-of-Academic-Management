import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'usam-cadastrar-disciplina',
  templateUrl: './cadastrar-disciplina.component.html',
  styleUrls: ['./cadastrar-disciplina.component.css']
})
export class CadastrarDisciplinaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {

    this.CadastroDisiciplinaForm = this.formBuilder.group({
      nome_disciplina: ['', Validators.required],
      carga_horaria: ['', Validators.required],
      codigo_disciplina: ['', Validators.required],
      conteudo_disciplina: ['', Validators.required] 
    });

   }

  ngOnInit() {
  }

  CadastroDisiciplinaForm = this.formBuilder.group({
    usuario: [''],
    senha: ['']
  });

  salvar(nome_disciplina: string, carga_horaria: number,codigo_disciplina: string, conteudo_disciplina: string){
    alert(nome_disciplina);
  }

  

}
