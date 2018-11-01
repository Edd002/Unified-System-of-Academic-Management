import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Disciplina} from './disciplina.model';
import { FACELIST_API } from 'src/app/app.api';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'usam-cadastrar-disciplina',
  templateUrl: './cadastrar-disciplina.component.html',
  styleUrls: ['./cadastrar-disciplina.component.css']
})
export class CadastrarDisciplinaComponent implements OnInit {

  CadastroDisiciplinaForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private http:HttpClient) {
    this.CadastroDisiciplinaForm = this.formBuilder.group({
      nome_disciplina: ['', Validators.required],
      turno_disciplina: ['', Validators.required],
      cursos_disciplina: ['', Validators.required]
    });
   }

  ngOnInit() {
  }


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

  

}
