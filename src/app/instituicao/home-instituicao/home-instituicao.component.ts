import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../../shared/disciplina/disciplina.model';
import { Professor } from '../../professor/professor.model';
import { Aluno } from '../../aluno/aluno.model';
import { DisciplinaService } from '../../shared/disciplina/disciplina.service';
import { ProfessorService } from '../../professor/professor.service';
import { AlunoService } from '../../aluno/aluno.service';

@Component({
  selector: 'usam-home-instituicao',
  templateUrl: './home-instituicao.component.html',
  styleUrls: ['./home-instituicao.component.css']
})
export class HomeInstituicaoComponent implements OnInit {

  listDisciplinas: Disciplina[];
  listProfessores: Professor[];
  listAlunos: Aluno[];
  query: string;

  showProfessores: boolean;
  showAlunos: boolean;
  showDisciplinas: boolean;

  constructor(private alunoService: AlunoService, private professorService: ProfessorService, private disciplinaService: DisciplinaService) { }

  ngOnInit() {
  }

  loadProfessores() {
    this.showProfessores = true;
    this.showAlunos = false;
    this.showDisciplinas = false;

    this.professorService.getAllProfessores().subscribe(
      data => this.listProfessores = data
    );
  }

  loadAlunos() {
    this.showProfessores = false;
    this.showAlunos = true;
    this.showDisciplinas = false;

    this.alunoService.getAllAlunos().subscribe(
      data => this.listAlunos = data
    );
  }

  loadDisciplinas() {
    this.showProfessores = false;
    this.showAlunos = false;
    this.showDisciplinas = true;

    this.disciplinaService.getAllDisciplinas().subscribe(
      data => this.listDisciplinas = data
    );
  }

  searchAluno() {
    this.alunoService.getAllAlunosBySearch(this.query).subscribe(
      data => this.listAlunos = data
    );
  }

}
