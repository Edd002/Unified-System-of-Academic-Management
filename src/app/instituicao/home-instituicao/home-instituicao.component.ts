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

  constructor(private alunoService: AlunoService, private professorService: ProfessorService, private disciplinaService: DisciplinaService) { }

  ngOnInit() {
    this.professorService.getAllProfessores().subscribe(
      data => this.listProfessores = data
    );

    this.alunoService.getAllAlunos().subscribe(
      data => this.listAlunos = data
    );

    this.disciplinaService.getAllDisciplinas().subscribe(
      data => this.listDisciplinas = data
    );
  }

  pesquisarAluno() {
    this.alunoService.getAllAlunosBySearch(this.query).subscribe(
      data => this.listAlunos = data
    );
  }

}
