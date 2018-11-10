import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Disciplina} from '../../../disciplina/disciplina.model'
import {DisciplinaService} from '../../../disciplina/disciplina.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'usam-alterar-disciplina',
  templateUrl: './alterar-disciplina.component.html',
  styleUrls: ['./alterar-disciplina.component.css']
})
export class AlterarDisciplinaComponent implements OnInit {

  AlterarDisiciplinaForm: FormGroup;
  idDisciplina: number;
  disciplinaAlterar: Disciplina;
  disciplina: Disciplina;

  constructor(private formBuilder: FormBuilder,private serviceDisciplina:DisciplinaService, private route: ActivatedRoute) {

    this.AlterarDisiciplinaForm = this.formBuilder.group({
      nome_disciplina:['', [Validators.required]],
      turno_disciplina:['', [Validators.required]],
      cursos_disciplina:['', [Validators.required]]
    });      

    this.serviceDisciplina.getDisciplinaById(this.route.snapshot.params['id']).subscribe(data => 
      {
        this.disciplina = data;  
        this.AlterarDisiciplinaForm.controls.nome_disciplina.setValue(data.nome_disciplina);
        this.AlterarDisiciplinaForm.controls.turno_disciplina.setValue(data.turno_disciplina);
        this.AlterarDisiciplinaForm.controls.cursos_disciplina.setValue(data.cursos_disciplina);
        
      });
    

  }

  ngOnInit() {
   
  }

  salvarDisciplina(){
    let disciplinaAlterar: Disciplina = {
      "id": this.idDisciplina,
      "nome_disciplina": this.AlterarDisiciplinaForm.controls.nome_disciplina.value,
      "turno_disciplina": this.AlterarDisiciplinaForm.controls.turno_disciplina.value,
      "cursos_disciplina": this.AlterarDisiciplinaForm.controls.cursos_disciplina.value,
    }
    console.log( disciplinaAlterar);

   

    /*
    this.serviceDisciplina.alterarDisciplina(disciplinaAlterar).subscribe(
      data =>{
        console.log(data);
        alert("Disciplina Alterada Com Sucesso !");
      },
      err =>{
        alert("Erro Ao Alteradar ,  Veja o Console para detalhes !");
        console.log('Erro Gerado: '+JSON.stringify(err));
      }
    );  */

  }

  private id(id: number) {
    this.idDisciplina = id; 
    this.salvarDisciplina();
  }


}
