import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Disciplina} from './disciplina.model';
import { FACELIST_API } from 'src/app/app.api';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http'

=======
>>>>>>> 7f4613357723c5b60781d79520b4e7b88bd6c5e7

@Component({
  selector: 'usam-cadastrar-disciplina',
  templateUrl: './cadastrar-disciplina.component.html',
  styleUrls: ['./cadastrar-disciplina.component.css']
})
export class CadastrarDisciplinaComponent implements OnInit {

<<<<<<< HEAD
  CadastroDisiciplinaForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private http:HttpClient) {
    this.CadastroDisiciplinaForm = this.formBuilder.group({
      nome_disciplina: ['', Validators.required],
      turno_disciplina: ['', Validators.required],
      cursos_disciplina: ['', Validators.required]
    });
   }
=======
  constructor() { }
>>>>>>> 7f4613357723c5b60781d79520b4e7b88bd6c5e7

  ngOnInit() {
  }

<<<<<<< HEAD

  salvarDisciplina() {
    let disciplina: Disciplina = {
      "codigo": null,
      "nome": this.CadastroDisiciplinaForm.controls.nome_disciplina.value,
      "turnos": this.CadastroDisiciplinaForm.controls.turno_disciplina.value,
      "cursos": this.CadastroDisiciplinaForm.controls.cursos_disciplina.value
    }
      //console.log(disciplina);  
    this.registrarDisciplina(disciplina);
  }
  
  registrarDisciplina(disciplina:Disciplina):Observable<Disciplina>{
    console.log(disciplina);  
    return this.http.post<Disciplina>(`${FACELIST_API}/disciplinas`,disciplina);
  }

  

=======
>>>>>>> 7f4613357723c5b60781d79520b4e7b88bd6c5e7
}
